<script setup lang="ts">
const supabase = useSupabaseClient()
const sign_in_or_up = ref('sign_in');
const otp_email = ref('')
const email = ref('')
const password = ref('')

const props = defineProps({
    sign_in_or_up: {
        type: String,
        default: 'sign_in'
    }
});
if (props.sign_in_or_up) {
    sign_in_or_up.value = props.sign_in_or_up;
}

const showOTPModal = ref(false);

const base_url = window.location.origin;

const signInWithOtp = async () => {
    
    console.log('base url', base_url);
    console.log(otp_email.value);
    const { error } = await supabase.auth.signInWithOtp({
        email: email.value,
        options: {
            emailRedirectTo: `${base_url}/confirm`,
        }
    })
    if (error) console.log(error)
}

const signInWithEmailPassword = async () => {
    const { error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })
}

const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    })
}

const signInWithFacebook = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
    })
}

</script>
<template>
    <div class="w-full max-w-[400px] relative">
        <h1>
            <span v-if="sign_in_or_up === 'sign_in'">Sign In</span>
            <span v-else>Sign Up</span>
        </h1>
        <div class="sign-in-up-button-container">
            <UButton variant="outline" class="sign-in-up-button" @click="showOTPModal = true">
            Email a one-time password
            </UButton>
        </div>
        <div class="sign-in-up-button-container">
            <UButton variant="outline"  class="sign-in-up-button" @click="signInWithEmailPassword">
            <span v-if="sign_in_or_up === 'sign_up'">Set up </span><span v-else>Use</span> email and password
            </UButton>
        </div>
        <div class="sign-in-up-button-container">
            <UButton variant="outline"  class="sign-in-up-button" @click="signInWithGoogle">
            Sign <span v-if="sign_in_or_up === 'sign_in'">in</span><span v-else>up</span> with Google
            </UButton>
        </div>
        <div class="sign-in-up-button-container">
            <UButton variant="outline"  class="sign-in-up-button" @click="signInWithFacebook">
            Sign <span v-if="sign_in_or_up === 'sign_in'">in</span><span v-else>up</span> with Facebook
            </UButton>
        </div>
    </div>
  <UModal v-model="showOTPModal">
    <div class="p-6">
        <h1 class="text-xl font-bold mb-4">Get One-Time Password</h1>
        <div>
            <UInput v-model="otp_email" label="Email" type="email" placeholder="email@example.com" />
        </div>
        <div class="mt-4">
            <UButton @click="signInWithOtp">
                Send one-time password
            </UButton>
        </div>
    </div>
  </UModal>
</template>

<style scoped>
.sign-in-up-button-container {
    margin-bottom: 10px;
}
.sign-in-up-button {
    width: 100%;
}
</style>