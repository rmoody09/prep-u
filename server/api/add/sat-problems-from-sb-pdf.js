import { serverSupabaseUser, serverSupabaseServiceRole } from '#supabase/server'
import Anthropic from "@anthropic-ai/sdk";
import { getCbSectionSkillIDs, getCbSkillIDs } from '~/assets/composables/SATProblemTypes';
import { client } from "../../trigger.dev/triggers";

//const sample_json = `[{"test_section":"math","question_id":"feea2bbd","domain":"advanced_math","skill":"nonlinear_functions","question_text":"[img]The graph of the exponential function $latex_startf$latex_end is shown, where $latex_starty=f(x)$latex_end. The y-intercept of the graph is $latex_start(0,y)$latex_end. What is the value of $latex_starty$latex_end? \n","question_html":"<img src=\"https://hxosbmzvobqvyncpnxqt.supabase.co/storage/v1/object/public/Problem%20Graphics/CollegeBoard%20Question%20Bank%20Graphics/question_feea2bbd_graphic.png\" style=\"width: 239px; height: auto; cursor: pointer;\" draggable=\"true\"><p>The graph of the exponential function <math-component latex=\"f\"></math-component> is shown, where <math-component latex=\"y=f(x)\"></math-component>. The <em>y</em>-intercept of the graph is <math-component latex=\"(0,y)\"></math-component>. What is the value of <math-component latex=\"y\"></math-component>?&nbsp;</p>","question_json":{"type":"doc","content":[{"type":"image","attrs":{"id":null,"alt":null,"src":"https://hxosbmzvobqvyncpnxqt.supabase.co/storage/v1/object/public/Problem%20Graphics/CollegeBoard%20Question%20Bank%20Graphics/question_feea2bbd_graphic.png","name":null,"class":null,"ismap":null,"sizes":null,"style":"width: 239px; height: auto; cursor: pointer;","title":null,"width":null,"height":null,"srcset":null,"usemap":null,"loading":null,"decoding":null,"longdesc":null,"tabindex":null,"draggable":true,"aria-label":null,"crossorigin":null,"referrerpolicy":null,"aria-labelledby":null,"aria-describedby":null}},{"type":"paragraph","content":[{"text":"The graph of the exponential function ","type":"text"},{"type":"mathComponent","attrs":{"latex":"f"}},{"text":" is shown, where ","type":"text"},{"type":"mathComponent","attrs":{"latex":"y=f(x)"}},{"text":". The ","type":"text"},{"text":"y","type":"text","marks":[{"type":"italic"}]},{"text":"-intercept of the graph is ","type":"text"},{"type":"mathComponent","attrs":{"latex":"(0,y)"}},{"text":". What is the value of ","type":"text"},{"type":"mathComponent","attrs":{"latex":"y"}},{"text":"? ","type":"text"}]}]},"answer_type":"numeric_input","answer_choices":[],"mult_choice_answer":null,"input_answers":["3"],"difficulty":1,"contains_graphic":true,"solution":{"html":"<p>The correct answer is 3. It's given that the <em>y</em>-intercept of the graph shown is <math-component latex=\"(0,y)\"></math-component>. The graph passes through the point (0,3). Therefore, the value of <math-component latex=\"y\"></math-component> is 3.&nbsp;</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"The correct answer is 3. It's given that the ","type":"text"},{"text":"y","type":"text","marks":[{"type":"italic"}]},{"text":"-intercept of the graph shown is ","type":"text"},{"type":"mathComponent","attrs":{"latex":"(0,y)"}},{"text":". The graph passes through the point (0,3). Therefore, the value of ","type":"text"},{"type":"mathComponent","attrs":{"latex":"y"}},{"text":" is 3. ","type":"text"}]}]}}},{"test_section":"math","question_id":"3cc991d1","domain":"algebra","skill":"linear_equations_in_one_variable","question_text":"On the first day of a semester, a film club has 90 members. Each day after the first day of the semester, 10 new members join the film club. If no members leave the film club, how many total members will the film club have 4 days after the first day of the semester? \n","question_html":"<p>On the first day of a semester, a film club has <strong>90</strong> members. Each day after the first day of the semester, <strong>10</strong> new members join the film club. If no members leave the film club, how many total members will the film club have <strong>4</strong> days after the first day of the semester?&nbsp;</p>","question_json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"On the first day of a semester, a film club has ","type":"text"},{"text":"90","type":"text","marks":[{"type":"bold"}]},{"text":" members. Each day after the first day of the semester, ","type":"text"},{"text":"10","type":"text","marks":[{"type":"bold"}]},{"text":" new members join the film club. If no members leave the film club, how many total members will the film club have ","type":"text"},{"text":"4","type":"text","marks":[{"type":"bold"}]},{"text":" days after the first day of the semester? ","type":"text"}]}]},"answer_type":"multiple_choice","answer_choices":[{"html":"<p>400</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"400","type":"text"}]}]}},{"html":"<p>130</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"130","type":"text"}]}]}},{"html":"<p>94</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"94","type":"text"}]}]}},{"html":"<p>90</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"90","type":"text"}]}]}}],"mult_choice_answer":1,"input_answers":null,"difficulty":1,"contains_graphic":false,"solution":{"html":"<p>Choice B is correct. It's given that the film club has <strong>90</strong> members on the first day of a semester, and <strong>10</strong> new members join the film club each day after the first day of the semester. This means that after <strong>4</strong> days, <math-component latex=\"4\\times10\"></math-component>, or <strong>40</strong>, new members will have joined the club. Adding <strong>40</strong> members to the original <strong>90</strong> club members yields <strong>130</strong> members. Thus, the film club will have <strong>130</strong> total members <strong>4</strong> days after the first day of the semester. </p><p></p><p>Choice A is incorrect. This is the number of members that will have joined the film club <strong>4</strong> days after the first day of the semester if <strong>100</strong> new members, not <strong>10</strong>, join the film club each day. </p><p></p><p>Choice C is incorrect. This is the number of members the film club will have <strong>4</strong> days after the first day of the semester if 1 new member, not <strong>10</strong>, joins the film club each day. </p><p></p><p>Choice D is incorrect. This is the number of members the film club has on the first day of the semester.&nbsp;</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"Choice B is correct. It's given that the film club has ","type":"text"},{"text":"90","type":"text","marks":[{"type":"bold"}]},{"text":" members on the first day of a semester, and ","type":"text"},{"text":"10","type":"text","marks":[{"type":"bold"}]},{"text":" new members join the film club each day after the first day of the semester. This means that after ","type":"text"},{"text":"4","type":"text","marks":[{"type":"bold"}]},{"text":" days, ","type":"text"},{"type":"mathComponent","attrs":{"latex":"4\\times10"}},{"text":", or ","type":"text"},{"text":"40","type":"text","marks":[{"type":"bold"}]},{"text":", new members will have joined the club. Adding ","type":"text"},{"text":"40","type":"text","marks":[{"type":"bold"}]},{"text":" members to the original ","type":"text"},{"text":"90","type":"text","marks":[{"type":"bold"}]},{"text":" club members yields ","type":"text"},{"text":"130","type":"text","marks":[{"type":"bold"}]},{"text":" members. Thus, the film club will have ","type":"text"},{"text":"130","type":"text","marks":[{"type":"bold"}]},{"text":" total members ","type":"text"},{"text":"4","type":"text","marks":[{"type":"bold"}]},{"text":" days after the first day of the semester. ","type":"text"}]},{"type":"paragraph"},{"type":"paragraph","content":[{"text":"Choice A is incorrect. This is the number of members that will have joined the film club ","type":"text"},{"text":"4","type":"text","marks":[{"type":"bold"}]},{"text":" days after the first day of the semester if ","type":"text"},{"text":"100","type":"text","marks":[{"type":"bold"}]},{"text":" new members, not ","type":"text"},{"text":"10","type":"text","marks":[{"type":"bold"}]},{"text":", join the film club each day. ","type":"text"}]},{"type":"paragraph"},{"type":"paragraph","content":[{"text":"Choice C is incorrect. This is the number of members the film club will have ","type":"text"},{"text":"4","type":"text","marks":[{"type":"bold"}]},{"text":" days after the first day of the semester if 1 new member, not ","type":"text"},{"text":"10","type":"text","marks":[{"type":"bold"}]},{"text":", joins the film club each day. ","type":"text"}]},{"type":"paragraph"},{"type":"paragraph","content":[{"text":"Choice D is incorrect. This is the number of members the film club has on the first day of the semester. ","type":"text"}]}]}}},{"test_section":"math","question_id":"005e9982","domain":"advanced_math","skill":"nonlinear_functions","question_text":"$latex_startf(x)=9,000\\left(0.66\\right)^{x}$latex_end\nThe given function $latex_startf$latex_end models the number of advertisements a company sent to its clients each year, where $latex_startx$latex_end represents the number of years since 1997, and $latex_start0\\le x\\le5$latex_end. If $latex_starty=f(x)$latex_end is graphed in the xy-plane, which of the following is the best interpretation of the y-intercept of the graph in this context? \n","question_html":"<p><math-component latex=\"f(x)=9,000\\left(0.66\\right)^{x}\"></math-component></p><p>The given function <math-component latex=\"f\"></math-component> models the number of advertisements a company sent to its clients each year, where <math-component latex=\"x\"></math-component> represents the number of years since 1997, and <math-component latex=\"0\\le x\\le5\"></math-component>. If <math-component latex=\"y=f(x)\"></math-component> is graphed in the <em>xy</em>-plane, which of the following is the best interpretation of the <em>y</em>-intercept of the graph in this context?&nbsp;</p>","question_json":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"mathComponent","attrs":{"latex":"f(x)=9,000\\left(0.66\\right)^{x}"}}]},{"type":"paragraph","content":[{"text":"The given function ","type":"text"},{"type":"mathComponent","attrs":{"latex":"f"}},{"text":" models the number of advertisements a company sent to its clients each year, where ","type":"text"},{"type":"mathComponent","attrs":{"latex":"x"}},{"text":" represents the number of years since 1997, and ","type":"text"},{"type":"mathComponent","attrs":{"latex":"0\\le x\\le5"}},{"text":". If ","type":"text"},{"type":"mathComponent","attrs":{"latex":"y=f(x)"}},{"text":" is graphed in the ","type":"text"},{"text":"xy","type":"text","marks":[{"type":"italic"}]},{"text":"-plane, which of the following is the best interpretation of the ","type":"text"},{"text":"y","type":"text","marks":[{"type":"italic"}]},{"text":"-intercept of the graph in this context? ","type":"text"}]}]},"answer_type":"multiple_choice","answer_choices":[{"html":"<p>The minimum estimated number of advertisements the company sent to its clients during the 5 years was 1,708.&nbsp;</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"The minimum estimated number of advertisements the company sent to its clients during the 5 years was 1,708. ","type":"text"}]}]}},{"html":"<p>The minimum estimated number of advertisements the company sent to its clients during the 5 years was 9,000.&nbsp;</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"The minimum estimated number of advertisements the company sent to its clients during the 5 years was 9,000. ","type":"text"}]}]}},{"html":"<p>The estimated number of advertisements the company sent to its clients in 1997 was 1,708.&nbsp;</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"The estimated number of advertisements the company sent to its clients in 1997 was 1,708. ","type":"text"}]}]}},{"html":"<p>The estimated number of advertisements the company sent to its clients in 1997 was 9,000.&nbsp;</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"The estimated number of advertisements the company sent to its clients in 1997 was 9,000. ","type":"text"}]}]}}],"mult_choice_answer":3,"input_answers":null,"difficulty":3,"contains_graphic":false,"solution":{"html":"<p>Choice D is correct. The <em>y</em>-intercept of a graph in the <em>xy</em>-plane is the point where x = 0. For the given function <math-component latex=\"f\"></math-component>, the <em>y</em>-intercept of the graph of <math-component latex=\"y=f(x)\"></math-component> in the <em>xy</em>-plane can be found by substituting 0 for <math-component latex=\"x\"></math-component> in the equation <math-component latex=\"y=9,000\\left(0.66\\right)^{x}\"></math-component>, which gives <math-component latex=\"y=9,000\\left(0.66\\right)^0\"></math-component>. This is equivalent to <math-component latex=\"y=9,000(1)\"></math-component>, or <math-component latex=\"y = 9,000\"></math-component>. Therefore, the <em>y</em>-intercept of the graph of <math-component latex=\"y=f(x)\"></math-component> is (0, 9,000). It's given that the function <math-component latex=\"f\"></math-component> models the number of advertisements a company sent to its clients each year. Therefore, <math-component latex=\"f(x)\"></math-component> represents the estimated number of advertisements the company sent to its clients each year. It's also given that <math-component latex=\"x\"></math-component> represents the number of years since 1997. Therefore, <math-component latex=\"x=0\"></math-component> represents 0 years since 1997, or 1997. Thus, the best interpretation of the <em>y</em>-intercept of the graph <math-component latex=\"f=f(x)\"></math-component> of is that the estimated number of advertisements the company sent to its clients in 1997 was 9,000. </p><p></p><p>Choice A is incorrect and may result from conceptual or calculation errors. </p><p></p><p>Choice B is incorrect and may result from conceptual or calculation errors. </p><p></p><p>Choice C is incorrect and may result from conceptual or calculation errors.&nbsp;</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"Choice D is correct. The ","type":"text"},{"text":"y","type":"text","marks":[{"type":"italic"}]},{"text":"-intercept of a graph in the ","type":"text"},{"text":"xy","type":"text","marks":[{"type":"italic"}]},{"text":"-plane is the point where x = 0. For the given function ","type":"text"},{"type":"mathComponent","attrs":{"latex":"f"}},{"text":", the ","type":"text"},{"text":"y","type":"text","marks":[{"type":"italic"}]},{"text":"-intercept of the graph of ","type":"text"},{"type":"mathComponent","attrs":{"latex":"y=f(x)"}},{"text":" in the ","type":"text"},{"text":"xy","type":"text","marks":[{"type":"italic"}]},{"text":"-plane can be found by substituting 0 for ","type":"text"},{"type":"mathComponent","attrs":{"latex":"x"}},{"text":" in the equation ","type":"text"},{"type":"mathComponent","attrs":{"latex":"y=9,000\\left(0.66\\right)^{x}"}},{"text":", which gives ","type":"text"},{"type":"mathComponent","attrs":{"latex":"y=9,000\\left(0.66\\right)^0"}},{"text":". This is equivalent to ","type":"text"},{"type":"mathComponent","attrs":{"latex":"y=9,000(1)"}},{"text":", or ","type":"text"},{"type":"mathComponent","attrs":{"latex":"y = 9,000"}},{"text":". Therefore, the ","type":"text"},{"text":"y","type":"text","marks":[{"type":"italic"}]},{"text":"-intercept of the graph of ","type":"text"},{"type":"mathComponent","attrs":{"latex":"y=f(x)"}},{"text":" is (0, 9,000). It's given that the function ","type":"text"},{"type":"mathComponent","attrs":{"latex":"f"}},{"text":" models the number of advertisements a company sent to its clients each year. Therefore, ","type":"text"},{"type":"mathComponent","attrs":{"latex":"f(x)"}},{"text":" represents the estimated number of advertisements the company sent to its clients each year. It's also given that ","type":"text"},{"type":"mathComponent","attrs":{"latex":"x"}},{"text":" represents the number of years since 1997. Therefore, ","type":"text"},{"type":"mathComponent","attrs":{"latex":"x=0"}},{"text":" represents 0 years since 1997, or 1997. Thus, the best interpretation of the ","type":"text"},{"text":"y","type":"text","marks":[{"type":"italic"}]},{"text":"-intercept of the graph ","type":"text"},{"type":"mathComponent","attrs":{"latex":"f=f(x)"}},{"text":" of is that the estimated number of advertisements the company sent to its clients in 1997 was 9,000. ","type":"text"}]},{"type":"paragraph"},{"type":"paragraph","content":[{"text":"Choice A is incorrect and may result from conceptual or calculation errors. ","type":"text"}]},{"type":"paragraph"},{"type":"paragraph","content":[{"text":"Choice B is incorrect and may result from conceptual or calculation errors. ","type":"text"}]},{"type":"paragraph"},{"type":"paragraph","content":[{"text":"Choice C is incorrect and may result from conceptual or calculation errors. ","type":"text"}]}]}}},{"test_section":"math","question_id":"6dc8c2cd","domain":"algebra","skill":"linear_inequalities_in_one_or_two_variables","question_text":"For a party, 50 dinner rolls are needed. Dinner rolls are sold in packages of 12. What is the minimum number of packages that should be bought for the party? \n","question_html":"<p>For a party, 50 dinner rolls are needed. Dinner rolls are sold in packages of 12. What is the minimum number of packages that should be bought for the party?&nbsp;</p>","question_json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"For a party, 50 dinner rolls are needed. Dinner rolls are sold in packages of 12. What is the minimum number of packages that should be bought for the party? ","type":"text"}]}]},"answer_type":"numeric_input","answer_choices":[],"mult_choice_answer":null,"input_answers":["5"],"difficulty":1,"contains_graphic":false,"solution":{"html":"<p>The correct answer is 5. Let <math-component latex=\"p\"></math-component> represent the number of packages of dinner rolls that should be bought for the party. It's given that dinner rolls are sold in packages of 12. Therefore, <math-component latex=\"12p\"></math-component> represents the number of dinner rolls that should be bought for the party. It's also given that 50 dinner rolls are needed; therefore, <math-component latex=\"12p\\leq50\"></math-component>. Dividing both sides of this inequality by 12 yields <math-component latex=\"12p\\leq\\frac{50}{12}\"></math-component>, or approximately <math-component latex=\"p\\leq4.17\"></math-component>. Since the number of packages of dinner rolls must be a whole number, the minimum number of packages that should be bought for the party is 5.&nbsp;</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"The correct answer is 5. Let ","type":"text"},{"type":"mathComponent","attrs":{"latex":"p"}},{"text":" represent the number of packages of dinner rolls that should be bought for the party. It's given that dinner rolls are sold in packages of 12. Therefore, ","type":"text"},{"type":"mathComponent","attrs":{"latex":"12p"}},{"text":" represents the number of dinner rolls that should be bought for the party. It's also given that 50 dinner rolls are needed; therefore, ","type":"text"},{"type":"mathComponent","attrs":{"latex":"12p\\leq50"}},{"text":". Dividing both sides of this inequality by 12 yields ","type":"text"},{"type":"mathComponent","attrs":{"latex":"12p\\leq\\frac{50}{12}"}},{"text":", or approximately ","type":"text"},{"type":"mathComponent","attrs":{"latex":"p\\leq4.17"}},{"text":". Since the number of packages of dinner rolls must be a whole number, the minimum number of packages that should be bought for the party is 5. ","type":"text"}]}]}}},{"test_section":"math","question_id":"ed5b7c61","domain":"advanced_math","skill":"nonlinear_functions","question_text":"$latex_startq(x)=32(2^x)$latex_end\nWhich table gives three values of $latex_startx$latex_end and their corresponding values of $latex_startq(x)$latex_end for function $latex_startq$latex_end? \n","question_html":"<p><math-component latex=\"q(x)=32(2^x)\"></math-component></p><p>Which table gives three values of <math-component latex=\"x\"></math-component> and their corresponding values of <math-component latex=\"q(x)\"></math-component> for function <math-component latex=\"q\"></math-component>?&nbsp;</p>","question_json":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"mathComponent","attrs":{"latex":"q(x)=32(2^x)"}}]},{"type":"paragraph","content":[{"text":"Which table gives three values of ","type":"text"},{"type":"mathComponent","attrs":{"latex":"x"}},{"text":" and their corresponding values of ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q(x)"}},{"text":" for function ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q"}},{"text":"? ","type":"text"}]}]},"answer_type":"multiple_choice","answer_choices":[{"html":"<table style=\"min-width: 100px\"><colgroup><col><col><col><col></colgroup><tbody><tr><td colspan=\"1\" rowspan=\"1\"><p>x</p></td><td colspan=\"1\" rowspan=\"1\"><p>-1</p></td><td colspan=\"1\" rowspan=\"1\"><p>0</p></td><td colspan=\"1\" rowspan=\"1\"><p>1</p></td></tr><tr><td colspan=\"1\" rowspan=\"1\"><p>q(x)</p></td><td colspan=\"1\" rowspan=\"1\"><p>-64</p></td><td colspan=\"1\" rowspan=\"1\"><p>0</p></td><td colspan=\"1\" rowspan=\"1\"><p>64</p></td></tr></tbody></table>","json":{"type":"doc","content":[{"type":"table","content":[{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"x","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"-1","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"0","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"1","type":"text"}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"q(x)","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"-64","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"0","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"64","type":"text"}]}]}]}]}]}},{"html":"<p></p><table style=\"min-width: 100px\"><colgroup><col><col><col><col></colgroup><tbody><tr><td colspan=\"1\" rowspan=\"1\"><p>x</p></td><td colspan=\"1\" rowspan=\"1\"><p>-1</p></td><td colspan=\"1\" rowspan=\"1\"><p>0</p></td><td colspan=\"1\" rowspan=\"1\"><p>1</p></td></tr><tr><td colspan=\"1\" rowspan=\"1\"><p>q(x)</p></td><td colspan=\"1\" rowspan=\"1\"><p><math-component latex=\"\\frac{1}{16}\"></math-component></p></td><td colspan=\"1\" rowspan=\"1\"><p>2</p></td><td colspan=\"1\" rowspan=\"1\"><p>64</p></td></tr></tbody></table>","json":{"type":"doc","content":[{"type":"paragraph"},{"type":"table","content":[{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"x","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"-1","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"0","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"1","type":"text"}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"q(x)","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"type":"mathComponent","attrs":{"latex":"\\frac{1}{16}"}}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"2","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"64","type":"text"}]}]}]}]}]}},{"html":"<p></p><table style=\"min-width: 100px\"><colgroup><col><col><col><col></colgroup><tbody><tr><td colspan=\"1\" rowspan=\"1\"><p>x</p></td><td colspan=\"1\" rowspan=\"1\"><p>-1</p></td><td colspan=\"1\" rowspan=\"1\"><p>0</p></td><td colspan=\"1\" rowspan=\"1\"><p>1</p></td></tr><tr><td colspan=\"1\" rowspan=\"1\"><p>q(x)</p></td><td colspan=\"1\" rowspan=\"1\"><p><math-component latex=\"\\frac{1}{16}\"></math-component></p></td><td colspan=\"1\" rowspan=\"1\"><p>32</p></td><td colspan=\"1\" rowspan=\"1\"><p>64</p></td></tr></tbody></table>","json":{"type":"doc","content":[{"type":"paragraph"},{"type":"table","content":[{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"x","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"-1","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"0","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"1","type":"text"}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"q(x)","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"type":"mathComponent","attrs":{"latex":"\\frac{1}{16}"}}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"32","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"64","type":"text"}]}]}]}]}]}},{"html":"<p></p><table style=\"min-width: 100px\"><colgroup><col><col><col><col></colgroup><tbody><tr><td colspan=\"1\" rowspan=\"1\"><p>x</p></td><td colspan=\"1\" rowspan=\"1\"><p>-1</p></td><td colspan=\"1\" rowspan=\"1\"><p>0</p></td><td colspan=\"1\" rowspan=\"1\"><p>1</p></td></tr><tr><td colspan=\"1\" rowspan=\"1\"><p>q(x)</p></td><td colspan=\"1\" rowspan=\"1\"><p>16</p></td><td colspan=\"1\" rowspan=\"1\"><p>32</p></td><td colspan=\"1\" rowspan=\"1\"><p>64</p></td></tr></tbody></table>","json":{"type":"doc","content":[{"type":"paragraph"},{"type":"table","content":[{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"x","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"-1","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"0","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"1","type":"text"}]}]}]},{"type":"tableRow","content":[{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"q(x)","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"16","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"32","type":"text"}]}]},{"type":"tableCell","attrs":{"colspan":1,"rowspan":1,"colwidth":null},"content":[{"type":"paragraph","content":[{"text":"64","type":"text"}]}]}]}]}]}}],"mult_choice_answer":3,"input_answers":null,"difficulty":2,"contains_graphic":false,"solution":{"html":"<p>Choice D is correct. Substituting -1 for <math-component latex=\"x\"></math-component> in the given function yields <math-component latex=\"q\\left(-1\\right)=32\\left(2\\right)^{-1}\"></math-component>, which is equivalent to <math-component latex=\"q(-1)=32(\\frac{1}{2})\"></math-component>, or <math-component latex=\"q(-1)=16\"></math-component>. Therefore, when <math-component latex=\"x=-1\"></math-component>, the corresponding value of <math-component latex=\"q(x)\"></math-component> for function <math-component latex=\"q\"></math-component> is 16. Substituting 0 for <math-component latex=\"x\"></math-component> in the given function yields <math-component latex=\"q(0)=32(2)^0\"></math-component>, which is equivalent to <math-component latex=\"q(0)=32(1)\"></math-component>, or <math-component latex=\"q(0)=32\"></math-component>. Therefore, when <math-component latex=\"x=0\"></math-component> , the corresponding value of <math-component latex=\"q(x)\"></math-component> for function <math-component latex=\"q\"></math-component> is 32. Substituting 1 for <math-component latex=\"x\"></math-component> in the given function yields <math-component latex=\"q(1)=32(2)^1\"></math-component>, which is equivalent to <math-component latex=\"q(1) = 32(2)\"></math-component>, or <math-component latex=\"q(1)=64\"></math-component>. Therefore, when <math-component latex=\"x=1\"></math-component>, the corresponding value of <math-component latex=\"q(x)\"></math-component> for function <math-component latex=\"q\"></math-component> is 64. Of the choices given, only the table in choice D gives these three values of <math-component latex=\"x\"></math-component> and their corresponding values of <math-component latex=\"q(x)\"></math-component> for function <math-component latex=\"q\"></math-component>. </p><p></p><p>Choice A is incorrect. This table gives three values of <math-component latex=\"x\"></math-component>and their corresponding values of <math-component latex=\"q(x)\"></math-component> for the function <math-component latex=\"q(x) = 32(2x)\"></math-component>. </p><p></p><p>Choice B is incorrect. This table gives three values of <math-component latex=\"x\"></math-component>and their corresponding values of <math-component latex=\"q(x)\"></math-component> for the function <math-component latex=\"q(x)=2(32)^x\"></math-component>. </p><p></p><p>Choice C is incorrect and may result from conceptual or calculation errors.&nbsp;</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"Choice D is correct. Substituting -1 for ","type":"text"},{"type":"mathComponent","attrs":{"latex":"x"}},{"text":" in the given function yields ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q\\left(-1\\right)=32\\left(2\\right)^{-1}"}},{"text":", which is equivalent to ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q(-1)=32(\\frac{1}{2})"}},{"text":", or ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q(-1)=16"}},{"text":". Therefore, when ","type":"text"},{"type":"mathComponent","attrs":{"latex":"x=-1"}},{"text":", the corresponding value of ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q(x)"}},{"text":" for function ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q"}},{"text":" is 16. Substituting 0 for ","type":"text"},{"type":"mathComponent","attrs":{"latex":"x"}},{"text":" in the given function yields ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q(0)=32(2)^0"}},{"text":", which is equivalent to ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q(0)=32(1)"}},{"text":", or ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q(0)=32"}},{"text":". Therefore, when ","type":"text"},{"type":"mathComponent","attrs":{"latex":"x=0"}},{"text":" , the corresponding value of ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q(x)"}},{"text":" for function ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q"}},{"text":" is 32. Substituting 1 for ","type":"text"},{"type":"mathComponent","attrs":{"latex":"x"}},{"text":" in the given function yields ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q(1)=32(2)^1"}},{"text":", which is equivalent to ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q(1) = 32(2)"}},{"text":", or ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q(1)=64"}},{"text":". Therefore, when ","type":"text"},{"type":"mathComponent","attrs":{"latex":"x=1"}},{"text":", the corresponding value of ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q(x)"}},{"text":" for function ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q"}},{"text":" is 64. Of the choices given, only the table in choice D gives these three values of ","type":"text"},{"type":"mathComponent","attrs":{"latex":"x"}},{"text":" and their corresponding values of ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q(x)"}},{"text":" for function ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q"}},{"text":". ","type":"text"}]},{"type":"paragraph"},{"type":"paragraph","content":[{"text":"Choice A is incorrect. This table gives three values of ","type":"text"},{"type":"mathComponent","attrs":{"latex":"x"}},{"text":"and their corresponding values of ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q(x)"}},{"text":" for the function ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q(x) = 32(2x)"}},{"text":". ","type":"text"}]},{"type":"paragraph"},{"type":"paragraph","content":[{"text":"Choice B is incorrect. This table gives three values of ","type":"text"},{"type":"mathComponent","attrs":{"latex":"x"}},{"text":"and their corresponding values of ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q(x)"}},{"text":" for the function ","type":"text"},{"type":"mathComponent","attrs":{"latex":"q(x)=2(32)^x"}},{"text":". ","type":"text"}]},{"type":"paragraph"},{"type":"paragraph","content":[{"text":"Choice C is incorrect and may result from conceptual or calculation errors. ","type":"text"}]}]}}},{"test_section":"math","question_id":"57e4b0b9","domain":"algebra","skill":"linear_inequalities_in_one_or_two_variables","question_text":"A model estimates that whales from the genus Eschrichtius travel 72 to 77 miles in the ocean each day during their migration. Based on this model, which inequality represents the estimated total number of\nmiles, x, a whale from the genus Eschrichtius could travel in 16 days of its migration?\n","question_html":"<p>A model estimates that whales from the genus <em>Eschrichtius </em>travel 72 to 77 miles in the ocean each day during their migration. Based on this model, which inequality represents the estimated total number of</p><p>miles, x, a whale from the genus <em>Eschrichtius </em>could travel in 16 days of its migration?</p>","question_json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"A model estimates that whales from the genus ","type":"text"},{"text":"Eschrichtius ","type":"text","marks":[{"type":"italic"}]},{"text":"travel 72 to 77 miles in the ocean each day during their migration. Based on this model, which inequality represents the estimated total number of","type":"text"}]},{"type":"paragraph","content":[{"text":"miles, x, a whale from the genus ","type":"text"},{"text":"Eschrichtius ","type":"text","marks":[{"type":"italic"}]},{"text":"could travel in 16 days of its migration?","type":"text"}]}]},"answer_type":"multiple_choice","answer_choices":[{"html":"<p><math-component latex=\"72+16\\leq x\\leq77+16\"></math-component></p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"mathComponent","attrs":{"latex":"72+16\\leq x\\leq77+16"}}]}]}},{"html":"<p><math-component latex=\"\\left(72\\right)\\left(16\\right)\\leq x\\leq\\left(77\\right)\\left(16\\right)\"></math-component></p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"mathComponent","attrs":{"latex":"\\left(72\\right)\\left(16\\right)\\leq x\\leq\\left(77\\right)\\left(16\\right)"}}]}]}},{"html":"<p><math-component latex=\"72\\leq16+x\\leq77\"></math-component></p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"mathComponent","attrs":{"latex":"72\\leq16+x\\leq77"}}]}]}},{"html":"<p><math-component latex=\"72\\leq16x\\leq77\"></math-component></p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"mathComponent","attrs":{"latex":"72\\leq16x\\leq77"}}]}]}}],"mult_choice_answer":1,"input_answers":null,"difficulty":2,"contains_graphic":false,"solution":{"html":"<p>Choice B is correct. It's given that the model estimates that whales from the genus <em>Eschrichtius </em>travel 72 to 77 miles in the ocean each day during their migration. If one of these whales travels 72 miles each day for 16 days, then the whale travels 72(16) miles total. If one of these whales 77 travels miles each day for 16 days, then the whale travels 77(16) miles total. Therefore, the model estimates that in 16 days of its migration, a whale from the genus <em>Eschrichtius </em>could</p><p>travel at least 72(16) and at most 77(16) miles total. Thus, the inequality <math-component latex=\"\\left(72\\right)\\left(16\\right)\\leq x\\leq\\left(77\\right)\\left(16\\right)\"></math-component> estimated total number of miles, <math-component latex=\"x\"></math-component> , a whale from the genus <em>Eschrichtius </em>could travel in 16 days of its migration.</p><p></p><p>Choice A is incorrect and may result from conceptual errors. </p><p></p><p>Choice C is incorrect and may result from conceptual errors. </p><p></p><p>Choice D is incorrect and may result from conceptual errors.</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"Choice B is correct. It's given that the model estimates that whales from the genus ","type":"text"},{"text":"Eschrichtius ","type":"text","marks":[{"type":"italic"}]},{"text":"travel 72 to 77 miles in the ocean each day during their migration. If one of these whales travels 72 miles each day for 16 days, then the whale travels 72(16) miles total. If one of these whales 77 travels miles each day for 16 days, then the whale travels 77(16) miles total. Therefore, the model estimates that in 16 days of its migration, a whale from the genus ","type":"text"},{"text":"Eschrichtius ","type":"text","marks":[{"type":"italic"}]},{"text":"could","type":"text"}]},{"type":"paragraph","content":[{"text":"travel at least 72(16) and at most 77(16) miles total. Thus, the inequality ","type":"text"},{"type":"mathComponent","attrs":{"latex":"\\left(72\\right)\\left(16\\right)\\leq x\\leq\\left(77\\right)\\left(16\\right)"}},{"text":" estimated total number of miles, ","type":"text"},{"type":"mathComponent","attrs":{"latex":"x"}},{"text":" , a whale from the genus ","type":"text"},{"text":"Eschrichtius ","type":"text","marks":[{"type":"italic"}]},{"text":"could travel in 16 days of its migration.","type":"text"}]},{"type":"paragraph"},{"type":"paragraph","content":[{"text":"Choice A is incorrect and may result from conceptual errors. ","type":"text"}]},{"type":"paragraph"},{"type":"paragraph","content":[{"text":"Choice C is incorrect and may result from conceptual errors. ","type":"text"}]},{"type":"paragraph"},{"type":"paragraph","content":[{"text":"Choice D is incorrect and may result from conceptual errors.","type":"text"}]}]}}},{"test_section":"math","question_id":"a23c1142","domain":"algebra","skill":"linear_equations_in_one_variable","question_text":"8x = 88\n\nWhat value of x is the solution to the given equation?\n","question_html":"<p>8x = 88</p><p></p><p>What value of <strong>x</strong> is the solution to the given equation?</p>","question_json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"8x = 88","type":"text"}]},{"type":"paragraph"},{"type":"paragraph","content":[{"text":"What value of ","type":"text"},{"text":"x","type":"text","marks":[{"type":"bold"}]},{"text":" is the solution to the given equation?","type":"text"}]}]},"answer_type":"multiple_choice","answer_choices":[{"html":"<p>11</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"11","type":"text"}]}]}},{"html":"<p>80</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"80","type":"text"}]}]}},{"html":"<p>96</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"96","type":"text"}]}]}},{"html":"<p>704</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"704","type":"text"}]}]}}],"mult_choice_answer":0,"input_answers":null,"difficulty":1,"contains_graphic":false,"solution":{"html":"<p>Choice A is correct. Dividing both sides of the given equation 8 by yields x - 11. Therefore, 11 is the solution to the given equation. </p><p></p><p>Choice B is incorrect. This is the solution to the equation x + 8 = 88. </p><p></p><p>Choice C is incorrect. This is the solution to the equation x - 8 = 88. </p><p></p><p>Choice D is incorrect. This is the solution to the equation <math-component latex=\"\\frac{x}{8}=88\"></math-component>.</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"Choice A is correct. Dividing both sides of the given equation 8 by yields x - 11. Therefore, 11 is the solution to the given equation. ","type":"text"}]},{"type":"paragraph"},{"type":"paragraph","content":[{"text":"Choice B is incorrect. This is the solution to the equation x + 8 = 88. ","type":"text"}]},{"type":"paragraph"},{"type":"paragraph","content":[{"text":"Choice C is incorrect. This is the solution to the equation x - 8 = 88. ","type":"text"}]},{"type":"paragraph"},{"type":"paragraph","content":[{"text":"Choice D is incorrect. This is the solution to the equation ","type":"text"},{"type":"mathComponent","attrs":{"latex":"\\frac{x}{8}=88"}},{"text":".","type":"text"}]}]}}},{"test_section":"math","question_id":"49729cb4","domain":"algebra","skill":"linear_equations_in_one_variable","question_text":"If 3x - 27 = 24, what is the value of x - 9? \n","question_html":"<p>If 3x - 27 = 24, what is the value of x - 9?&nbsp;</p>","question_json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"If 3x - 27 = 24, what is the value of x - 9? ","type":"text"}]}]},"answer_type":"multiple_choice","answer_choices":[{"html":"<p>1</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"1","type":"text"}]}]}},{"html":"<p>8</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"8","type":"text"}]}]}},{"html":"<p>24</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"24","type":"text"}]}]}},{"html":"<p>35</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"35","type":"text"}]}]}}],"mult_choice_answer":1,"input_answers":null,"difficulty":1,"contains_graphic":false,"solution":{"html":"<p>Choice B is correct. Dividing each side of the given equation by <strong>3</strong> yields <strong>x - 9 = 8</strong>. Therefore, the value of <strong>x - 9</strong> is <strong>8</strong>. </p><p></p><p>Choice A is incorrect and may result from conceptual or calculation errors. </p><p></p><p>Choice C is incorrect. This is the value of <strong>3x - 27</strong>, not <strong>x - 9</strong>. </p><p></p><p>Choice D is incorrect and may result from conceptual or calculation errors.&nbsp;</p>","json":{"type":"doc","content":[{"type":"paragraph","content":[{"text":"Choice B is correct. Dividing each side of the given equation by ","type":"text"},{"text":"3","type":"text","marks":[{"type":"bold"}]},{"text":" yields ","type":"text"},{"text":"x - 9 = 8","type":"text","marks":[{"type":"bold"}]},{"text":". Therefore, the value of ","type":"text"},{"text":"x - 9","type":"text","marks":[{"type":"bold"}]},{"text":" is ","type":"text"},{"text":"8","type":"text","marks":[{"type":"bold"}]},{"text":". ","type":"text"}]},{"type":"paragraph"},{"type":"paragraph","content":[{"text":"Choice A is incorrect and may result from conceptual or calculation errors. ","type":"text"}]},{"type":"paragraph"},{"type":"paragraph","content":[{"text":"Choice C is incorrect. This is the value of ","type":"text"},{"text":"3x - 27","type":"text","marks":[{"type":"bold"}]},{"text":", not ","type":"text"},{"text":"x - 9","type":"text","marks":[{"type":"bold"}]},{"text":". ","type":"text"}]},{"type":"paragraph"},{"type":"paragraph","content":[{"text":"Choice D is incorrect and may result from conceptual or calculation errors. ","type":"text"}]}]}}}]`;

const math_sample_problem_ids = ['031faa14-08d6-4b0a-9374-4b1e2c773a8a', '4d161ef6-e6cd-4c4a-91fe-2b6482bfad0c', '6ab93f4b-7fb3-4965-bed1-5ef343d78cce', '9cceef1c-af85-4c22-88b1-1b20df7d4c99', 'ebf01828-7654-4070-90af-313ce104735b', 'fc31b9da-5b0d-4540-bde7-b2b9c12dc67c', 'ef406769-09f6-46f2-b909-995b941dbcda'];
const reading_writing_sample_problem_ids = [];




const getSystemPrompt = (options) => {
    let sample_json = options.sample_json;
    let section = options.section || 'mixed;';
    let skills_instructions = '';
    if (section == 'math') {
        skills_instructions = `
            The skill should take one of the following values: ${getCbSectionSkillIDs('math').join(', ')}.
        `;
    } else if (section == 'reading_writing') {
        skills_instructions = `
            The skill should take one of the following values: ${getCbSectionSkillIDs('reading_writing').join(', ')}.
        `;
    } else {
        skills_instructions = `
            If the test_section is math, the skill should take one of the following values: ${getCbSectionSkillIDs('math').join(', ')}.
            If the test_section is reading_writing, the skill should take one of the following values: ${getCbSectionSkillIDs('reading_writing').join(', ')}.
        `;
    }
    const system_prompt_1 = `
        Your role is to take a pdf file of SAT practice problems and perform various actions to extract information from the document in JSON format.
        You should not return any additional text. Your response should consist only of the JSON string.
        You should make sure that your JSON response is formatted correctly. Double check that it can be parsed by the javascript function JSON.parse() without throwing an error. If that causes an error, you should try to fix the error and return the correct JSON string.
        Each problem in the pdf will start with a header that includes the text "Question ID", which should help you identify how to separate the problems from each other.
        
        You may be asked to return an array representing the problems in the document.
        In that case, each item of the array should include the following fields: test_section, question_id, domain, skill, question_text, question_json, answer_type, answer_choices, mult_choice_answer, input_answers, difficulty, contains_graphic, solution_json.
        Here is an explanation of each of the fields:
            test_section: should be a string that is either 'math' or 'reading_writing'
            question_id: should be a string that depicts the college board question id
            domain: a snake-style string that indicates the domain of the question
            skill: a snake-style string that indicates the skill tested by the question
            question_text: the content of the question depicted in plain text. in some cases, you might not be able to depict the question perfectly with plain text due to mathematical expressions and graphics, but do your best and use the examples given as a guide. Make sure to iclude only the question content, and not the answer choices here.
            question_html: the question content formatted as html that can be fed into the tiptap editor. Please use the examples provided below as a guide for how to format the question in html. For mathematical expressions, use latex to express those in the html, using the examples provided as guidance. If there are any tables of data, see the examples provided below as reference for how to depict them. If there is an image in the question (excluding a table that an be represented as discussed previously), such as a graph or diagram, make sure to include it here. Make sure it is positioned correctly. If it is positioned above the text in the pdf, then it should come before the text in your response. If it's between two blocks of text, then it should be between those blocks of text in your response. Do not try to anticipate the source of the image. Always use this url as a placeholder for the source of any image: https://hxosbmzvobqvyncpnxqt.supabase.co/storage/v1/object/public/Problem%20Graphics/CollegeBoard%20Question%20Bank%20Graphics/generic-graphic.png?t=2024-11-03T16%3A47%3A58.869Z
            question_json: the question content formatted as json that can be fed into the tiptap editor. Please use the examples provided below as a guide for how to format the question in json. For mathematical expressions, use latex to express those in the json object, using the examples provided as guidance. If there are any tables of data, see the examples provided below as reference for how to depict them. If there is an image in the question (excluding a table that an be represented as discussed previously), such as a graph or diagram, make sure to include it here. Make sure it is positioned correctly. If it is positioned above the text in the pdf, then it should come before the text in your response. If it's between two blocks of text, then it should be between those blocks of text in your response. Do not try to anticipate the source of the image.  Always use this url as a placeholder for the source of any image: https://hxosbmzvobqvyncpnxqt.supabase.co/storage/v1/object/public/Problem%20Graphics/CollegeBoard%20Question%20Bank%20Graphics/generic-graphic.png?t=2024-11-03T16%3A47%3A58.869Z
            answer_type: should be either 'multiple_choice' or 'numeric_input'
            answer_choices: an array listing the answer choices. each choice should be given in html form as well as json form, similarly to how you formatted the question in each of those formats. There should always be 4 answer choices for multiple choice questions. If the question is not a multiple choice question, this should be null.
            input_answers: This should be an array of strings that depict the correct answer when the type of answer is numeric_input. If the answer can be depicted as a fraction or a decimal, include only the fraction in the array. For example, the answer 1/3 should be included as ["1/3"] and not ["0.3333"] or ["1/3", "0.3333"]. There should only be multiple items in the array if the question is multiple distinct answers (like "-5" and "3"), but not when there is a single answer that can be given in fraction or decimal form. For multiple choice questions, this should be null.
            difficulty: should indicate the difficulty of the question. Should be either an integer, 1, 2, or 3, representing easy, medium, or hard respectively.
            contains_graphic: a boolean indicating whether there is a graphic in the problem that requires an image
            solution: the rationale behind selecting the correct answer. should be given in both html and json format, similarly to how you formatted the questions.
            skill: ${skills_instructions}

        Below is some sample data of how an array of problems should be formatted:
        ${sample_json}
    `;

    const system_prompt = `
        Your role is to take a pdf file of SAT practice problems and perform various actions to extract information from the document in JSON format.
        You should not return any additional text. Your response should consist only of the JSON string.
        You should make sure that your JSON response is formatted correctly. Double check that it can be parsed by the javascript function JSON.parse() without throwing an error. If that causes an error, you should try to fix the error and return the correct JSON string.
        Each problem in the pdf will start with a header that includes the text "Question ID", which should help you identify how to separate the problems from each other.
        
        You may be asked to return an array representing the problems in the document.
        In that case, each item of the array should include the following fields: test_section, question_id, domain, skill, question_text, question_json, answer_type, answer_choices, mult_choice_answer, input_answers, difficulty, contains_graphic, solution_json.
        Here is an explanation of each of the fields:
            test_section: should be a string that is either 'math' or 'reading_writing'
            question_id: should be a string that depicts the college board question id
            domain: a snake-style string that indicates the domain of the question
            skill: a snake-style string that indicates the skill tested by the question
            question_text: the content of the question depicted in plain text. in some cases, you might not be able to depict the question perfectly with plain text due to mathematical expressions and graphics, but do your best and use the examples given as a guide. Make sure to iclude only the question content, and not the answer choices here.
            question_json: the question content formatted as json that can be fed into the tiptap editor. Please use the examples provided below as a guide for how to format the question in json. Make sure to iclude only the question content, and not the answer choices here. For mathematical expressions, use latex to express those in the json object, using the examples provided as guidance. If there are any tables of data, see the examples provided below as reference for how to depict them. If there is an image in the question (excluding a table that an be represented as discussed previously), such as a graph or diagram, make sure to include it here. Make sure it is positioned correctly. If it is positioned above the text in the pdf, then it should come before the text in your response. If it's between two blocks of text, then it should be between those blocks of text in your response. Do not try to anticipate the source of the image.  Always use this url as a placeholder for the source of any image: https://hxosbmzvobqvyncpnxqt.supabase.co/storage/v1/object/public/Problem%20Graphics/CollegeBoard%20Question%20Bank%20Graphics/generic-graphic.png?t=2024-11-03T16%3A47%3A58.869Z
            answer_type: should be either 'multiple_choice' or 'numeric_input'
            answer_choices: an array listing the answer choices. each choice should be given in html form as well as json form, similarly to how you formatted the question in each of those formats. There should always be 4 answer choices for multiple choice questions. If the question is not a multiple choice question, this should be null.
            input_answers: This should be an array of strings that depict the correct answer when the type of answer is numeric_input. If the answer can be depicted as a fraction or a decimal, include only the fraction in the array. For example, the answer 1/3 should be included as ["1/3"] and not ["0.3333"] or ["1/3", "0.3333"]. There should only be multiple items in the array if the question is multiple distinct answers (like "-5" and "3"), but not when there is a single answer that can be given in fraction or decimal form. For multiple choice questions, this should be null.
            difficulty: should indicate the difficulty of the question. Should be either an integer, 1, 2, or 3, representing easy, medium, or hard respectively.
            contains_graphic: a boolean indicating whether there is a graphic in the problem that requires an image
            solution_json: the rationale behind selecting the correct answer, and why other answer choices are incorrect. should be given in json format, using the examples provided as a guide. The formatting will also be similar to the formatting of the question_json field.
            skill: ${skills_instructions}

        Below is some sample data of how an array of problems should be formatted:
        ${sample_json}
    `;

    return system_prompt;
}


function prepareProblemForDB(problem, options = {}) {
    let difficulties = {easy: 1, medium: 2, hard: 3};
    let is_practice_test = options.is_practice_test || false;
    let db_problem = {
        source: 'collegeboard', 
        in_cb_question_bank: true,
        is_practice_test: is_practice_test,
        subsource: 'question_bank', 
        test_section: problem.test_section,
        source_question_id: problem.question_id,
        cb_domain: problem.domain,
        cb_skill: problem.skill,
        question_text: problem.question_text,
        question_json: problem.question_json, 
        answer_type: problem.answer_type,
        answer_choices: problem.answer_choices,
        input_answers: problem.input_answers,
        mult_choice_answer: problem.mult_choice_answer,
        difficulty: difficulties[problem.difficulty], 
        source_solution: {json: problem.solution_json}, 
        contains_graphic: problem.contains_graphic,
    }
    return db_problem;
}

function getProblemIDsFromAnthropicMsg(msg) {
    console.log('getProblemIDsFromAnthropicMsg');
    let resp_json = msg.content[0].text;
    resp_json = `${resp_json}`;
    console.log('resp_json:')
    console.log(resp_json);
    let question_ids = null;
    try {
        question_ids = JSON.parse(resp_json);
        console.log('question ids:')
        console.log(question_ids);
    } catch(err) {
        console.log('failed to parse original json, will try to reformat')
        let json_start = resp_json.indexOf("[");
        console.log('json start:')
        console.log(json_start);
        resp_json = resp_json.slice(json_start);
        let last_quote_index = resp_json.lastIndexOf('"');
        if (last_quote_index > -1) {
            resp_json = resp_json.slice(0, last_quote_index);
        } else {
            let last_single_quote_index = resp_json.lastIndexOf("'");
            if (last_single_quote_index > -1) {
                resp_json = resp_json.slice(0, last_single_quote_index);
            }
        }

        resp_json += "]";
        console.log('start of resp:')
        console.log(resp_json.slice(0, 100));
        console.log('end of resp:')
        console.log(resp_json.slice(resp_json.length - 100));
        question_ids = JSON.parse(resp_json);
        console.log('parsed json');
        console.log(question_ids);
    }
    return question_ids;
}

async function getProblemsFromAnthropicMsg(msg) {
    let resp_json = msg.content[0].text;
    resp_json = `${resp_json}`;
    console.log('start of resp:');
    console.log(resp_json.slice(0, 100));
    console.log('end of resp:')
    console.log(resp_json.slice(resp_json.length - 100));
    let problems = [];
    try {
        //data = JSON.parse(resp_json);
        problems = JSON.parse(resp_json);
        console.log('parsed problems')
        console.log(problems.length);
        for (let problem of problems) {
            console.log(problem.question_id);
        }
    } catch(err) {
        try {
            console.log('failed to parse original json, will try to reformat')
            let json_start = resp_json.indexOf("[");
            console.log('json start:')
            console.log(json_start);
            let new_json = resp_json.slice(json_start);
            let last_question_id_index = new_json.lastIndexOf("question_id");
            new_json = new_json.slice(0, last_question_id_index);
            let last_curly_brace_close = new_json.lastIndexOf("}");
            new_json = new_json.slice(0, last_curly_brace_close+1);
            new_json += "]";
            console.log('start of resp:')
            console.log(new_json.slice(0, 100));
            console.log('end of resp:')
            console.log(new_json.slice(new_json.length - 100));
            problems = JSON.parse(new_json);
            console.log('parsed json');
            console.log(problems.length);
        } catch(err) {
            console.log('still failed to parse json');
            console.log('resp_json:')
            console.log(resp_json);
            try {
                const user_prompt = `
                    The JSON string you gave me is unable to be parsed by the javascript function JSON.parse().
                    Please fix the json so that it can be parsed without throwing an error.
                    Your response should consist only of the corrected JSON string, with no additional text.
                    Below is the JSON string that needs to be fixed:
                    ${resp_json}
                `;
                const msg = await anthropic.messages.create({
                    model: 'claude-3-5-sonnet-latest', 
                    max_tokens: 8000, 
                    messages: [
                        {role: 'user', content: [
                            {"type": "text", "text": user_prompt}
                        ]}
    
                    ]
                });
                let corrected_json = msg.content[0].text;
            } catch(err) {
                console.log('still still failed to parse json');
            }
            console.log(err);
            problems = [];
            const { data, error } = await client.from('random_data').insert({text_data: resp_json});
        }
    }
    return problems;
}

async function saveProblemsToDB(client, problems, options = {}, user_id) {
    console.log('saveProblemsToDB')
    let db_problems = [];
    let question_ids = [];
    let failed_question_ids = [];
    let from_test = options.from_test || false;
    for (let problem of problems) {
        let db_problem = prepareProblemForDB(problem, {is_practice_test: from_test});
        db_problem.added_by_user = user_id;
        console.log('prepared for db');
        //console.log(db_problem);
        const { data, error } = await client.from('sat_problems').insert(db_problem);
        console.log('tried to add to db');
        if (error) {
            console.log('error inserting problem ' + problem.question_id);
            console.log(error);
            failed_question_ids.push(problem.question_id);
        }
        console.log(data);
        console.log('added question id ' + problem.question_id);
        console.log(problem.skill);
        question_ids.push(problem.question_id);
        db_problems.push(db_problem);
    }
    return {db_problems, question_ids, failed_question_ids};
}

const getProblemIDsFromAnthropic = async (anthropic, pdfBase64, sample_json, test_section) => {
    const system_prompt = getSystemPrompt({sample_json: sample_json, section: test_section});
    let attempts = 0;
    let succeeded = false;
    let question_ids = [];
    const user_prompt_0 = `
        Please identify all of the unique question ids in the document, and return them as a JSON array. Every time a new question ID is presented in the PDF, it is preceded by the text "Question ID", which should help you find them. Is is very important that you don't miss any and that you return the complete list of all unique question IDs in the whole document. The question ids should be in the order in which they appear in the document.
        Your response should consist only of the JSON array, with no additional text.
        Verify that the JSON can be parsed by JSON.parse() before returning
    `;
    const user_prompt_reflective_6 = `
        I previously gave you the following prompt, with the attached pdf:

        --previous prompt start--
        The attached document contains SAT practice problems across multiple pages. Each problem begins with a header containing 'Question ID' followed by an alphanumeric ID that is 8 characters in length. The same ID is then repeated in an 'ID: [id]' line and an 'ID: [id] Answer' section. 

        Please:
        1. Scan all pages of the document from beginning to end
        2. Identify all unique question IDs, counting each ID only once
        3. Verify each ID appears in both a question header and an answer section
        4. Return a JSON object containing:
        - total_pages_processed: number of pages scanned
        - total_ids_found: count of unique IDs
        - ids: array of IDs in order of first appearance

        Before responding, please verify you've reached the end of the document and haven't missed any pages.
        --previous prompt end--

        In your response, you missed a few question ids that were actually present in the document.
        These missed question ids were: ["f8a698f7", "d2cae91a", "3a7aa34d"]
        You also returned the same id twice: "a3d03f49"

        How can I improve the prompt to make sure you don't miss and don't return any duplicates?
    `

    const user_prompt_next = `
        The attached document contains SAT practice problems. Each problem begins with a header containing 'Question ID' followed by an alphanumeric ID that is 8 characters in length. The same ID is then repeated in an 'ID: [id]' line and an 'ID: [id] Answer' section. Please identify all unique question IDs, counting each ID only once, and return them in order of first appearance in the document as a JSON array. Verify each ID appears in both a question header and an answer section before including it. Make sure you scan the complete document linearly, and don't miss any.
    `

    const user_prompt_4 = `
        The attached document contains SAT practice problems across multiple pages. Each problem begins with a header containing 'Question ID' followed by an alphanumeric ID that is 8 characters in length. The same ID is then repeated in an 'ID: [id]' line and an 'ID: [id] Answer' section. 

        Please:
        1. Scan all pages of the document from beginning to end
        2. Identify all unique question IDs, counting each ID only once
        3. Verify each ID appears in both a question header and an answer section
        4. Return a JSON object containing:
        - total_pages_processed: number of pages scanned
        - total_ids_found: count of unique IDs
        - ids: array of IDs in order of first appearance

        Before responding, please verify you've reached the end of the document and haven't missed any pages.
    `

    //this was closest so far - it just missed one and made up one
    const user_prompt_5 = `
        The attached document contains SAT practice problems. Each problem begins with a header containing 'Question ID' followed by an alphanumeric ID that is 8 characters in length. The same ID is then repeated in an 'ID: [id]' line and an 'ID: [id] Answer' section. Working page by page through the entire document, identify all unique question IDs that appear with both a question header and answer section. After scanning all pages, combine the IDs into a single JSON array ordered by first appearance in the document. Before submitting your response, verify that the number of IDs in your array matches the total number of unique question headers in the document.
    `

    //this was what it suggested after #5, but it was worse - only returned 10 ids
    const user_prompt_6 = `
        The attached document contains SAT practice problems. Each problem begins with a header containing 'Question ID' followed by an alphanumeric ID that is 8 characters in length. The same ID is then repeated in an 'ID: [id]' line and an 'ID: [id] Answer' section. Working page by page through the entire document, identify all unique question IDs that appear with both a question header and answer section. 
        
        For each ID you identify, verify that:
        - It appears in a 'Question ID' header
        - It appears in both an 'ID: [id]' line and 'ID: [id] Answer' section
        - It is exactly 8 characters long
        - It only contains alphanumeric characters

        Process the document in the following way:
        - Scan each page sequentially from top to bottom
        - For each page, first identify all Question ID headers
        - For each header found, verify the ID appears in both required locations on that page
        - Keep a running list of verified IDs as you process each page
        - After completing all pages, review your list and verify the count matches the total number of complete question/answer pairs found

        After creating your list:
        - Verify each ID appears exactly once in your list
        - Verify each ID exists in the original document
        - Verify that the IDs are listed in the order they appear in the document
        - Verify that the total number of IDs in your list matches the total number of unique question headers in the document
        - Verify that the JSON can be parsed by JSON.parse() before returning

        Your response should consist only of the JSON array, with no additional text.
    `

    //this missed 5, made up 3
    const user_prompt_7 = `
        The attached document contains SAT practice problems across multiple pages. Each problem begins with a header containing 'Question ID' followed by an alphanumeric ID that is 8 characters in length. The same ID is then repeated in an 'ID: [id]' line and an 'ID: [id] Answer' section.

        Please process the document using these strict guidelines:

        1. Process each page methodically:
        - Scan for all 'Question ID' headers
        - For each header, verify matching 'ID:' and 'ID: [id] Answer' sections
        - Maintain a running set of unique IDs
        - Before adding any ID, verify it:
            * Is exactly 8 characters
            * Has not been previously recorded
            * Has all required sections present

        2. Track your progress:
        - Keep count of pages processed
        - Maintain a list of IDs in order of first appearance
        - Check for duplicates before adding any ID

        3. Before completing:
        - Verify you've reached the final page
        - Confirm your ID count matches your unique IDs list length
        - Verify no duplicates exist in your final list

        Return a JSON object containing:
        - total_pages_processed: number of pages scanned
        - total_ids_found: count of unique IDs
        - ids: array of IDs in order of first appearance

        Include in your response a confirmation that you've performed all validation steps.
    `

    const user_prompt_reflexive_7 = `
        I previously gave you the following prompt, with the attached pdf:

        --previous prompt start--
       The attached document contains SAT practice problems across multiple pages. Each problem begins with a header containing 'Question ID' followed by an alphanumeric ID that is 8 characters in length. The same ID is then repeated in an 'ID: [id]' line and an 'ID: [id] Answer' section.

        Please process the document using these strict guidelines:

        1. Process each page methodically:
        - Scan for all 'Question ID' headers
        - For each header, verify matching 'ID:' and 'ID: [id] Answer' sections
        - Maintain a running set of unique IDs
        - Before adding any ID, verify it:
            * Is exactly 8 characters
            * Has not been previously recorded
            * Has all required sections present

        2. Track your progress:
        - Keep count of pages processed
        - Maintain a list of IDs in order of first appearance
        - Check for duplicates before adding any ID

        3. Before completing:
        - Verify you've reached the final page
        - Confirm your ID count matches your unique IDs list length
        - Verify no duplicates exist in your final list

        Return a JSON object containing:
        - total_pages_processed: number of pages scanned
        - total_ids_found: count of unique IDs
        - ids: array of IDs in order of first appearance

        Include in your response a confirmation that you've performed all validation steps.
        --previous prompt end--

        In your response, you missed a few question ids that were actually present in the document, and you made up some ids that were not present in the document.
        These missed question ids were: ["f8a698f7", "d2cae91a", "3a7aa34d", "97f3dbe0", "a351b98d"]
        These made up question ids were: ["5c1751d6", "80f346ea", "005e9982"]

        Why did you miss some question ids?
        Why did you make up some question ids that were not present in the document?

        How can I improve the prompt to make sure you don't miss any ids and don't make up any ids that were not present in the document?
    `


    const user_prompt_8 = `
        The attached document contains SAT practice problems across multiple pages. Each problem begins with a header containing the exact text 'Question ID' followed by an alphanumeric ID that is 8 characters in length. I want you to return an array of all the question ids in the document.

        Please process the document using these strict guidelines:

        1. Process each page methodically, in order from first page to last:
        - Scan for any 'Question ID' headers
        - Maintain a running set of unique IDs (the 8-character alphanumeric id that follows 'Question ID')
        - Maintain a running count of how many 'Question ID' headers you see
        - Before adding any ID, verify it:
            * Is exactly 8 characters
            * Is actually present in the document
            * Is not a duplicate

        2. Track your progress:
        - Keep count of pages processed
        - Maintain a list of IDs in order of first appearance
        - Check for duplicates before adding any ID

        3. Before completing:
        - Verify you've reached the final page
        - Confirm your ID count matches your unique IDs list length
        - Verify no duplicates exist in your final list

        Return a JSON object containing:
        - total_pages_processed: number of pages scanned
        - total_question_id_headers_found: count of question id headers in the document
        - ids: array of IDs in order of first appearance
    `

    const user_prompt_reflexive_8 = `
        I previously gave you the following prompt, with the attached pdf:

        --previous prompt start--
        The attached document contains SAT practice problems across multiple pages. Each problem begins with a header containing the exact text 'Question ID' followed by an alphanumeric ID that is 8 characters in length. I want you to return an array of all the question ids in the document.

        Please process the document using these strict guidelines:

        1. Process each page methodically, in order from first page to last:
        - Scan for any 'Question ID' headers
        - Maintain a running set of unique IDs (the 8-character alphanumeric id that follows 'Question ID')
        - Maintain a running count of how many 'Question ID' headers you see
        - Before adding any ID, verify it:
            * Is exactly 8 characters
            * Is actually present in the document
            * Is not a duplicate

        2. Track your progress:
        - Keep count of pages processed
        - Maintain a list of IDs in order of first appearance
        - Check for duplicates before adding any ID

        3. Before completing:
        - Verify you've reached the final page
        - Confirm your ID count matches your unique IDs list length
        - Verify no duplicates exist in your final list

        Return a JSON object containing:
        - total_pages_processed: number of pages scanned
        - total_question_id_headers_found: count of question id headers in the document
        - ids: array of IDs in order of first appearance
        --previous prompt end--

        In your response, you missed a few question ids that were actually present in the document, and you listed one of the ids twice.
        These missed question ids were: ["f8a698f7", "d2cae91a", "2dfb2204"]
        This duplicate question id was: ["7cfe6c55"]

        Why did you miss some question ids?
        Why did include a duplicate despite my instructions not to verify no duplicates were in the final list?

        How can I improve the prompt to make sure you don't miss any ids and don't make up any ids that were not present in the document?
    `

    const user_prompt_9 = `
        The attached document contains SAT practice problems across multiple pages. Each problem begins with a header containing the exact text 'Question ID' followed by an alphanumeric ID that is 8 characters in length. I want you to return an array of all the question ids in the document.

        Please process the document using these strict guidelines:

        For each page:
        1. First locate all instances of the exact text "Question ID" on the page
        2. For each instance found:
        - Extract the exactly 8 characters that follow "Question ID"
        - Before adding to your list:
            a. Verify the ID is exactly 8 characters long
            b. Verify it consists only of alphanumeric characters
            c. Check against your current list to ensure it's not already included
            d. Document the page number where you found it
        3. Before moving to next page:
        - Record how many IDs were found on current page
        - Verify each ID found against original document text

        2. Add requirement for detailed tracking:
        Maintain a tracking object for each ID:
        {
            "id": "the 8-char ID",
            "page_found": page number,
            "position_on_page": "first/second/etc occurrence on page"
        }

        3. Add explicit verification steps:
        Before returning final result:
        1. Re-scan each page specifically looking for "Question ID"
        2. Cross-reference each ID in your list with the document
        3. Run a duplicate check on your final list
        4. Verify total count matches unique IDs collected
    `;

    const guidance_prompt = `
        I need help forming a prompt to get exactly what I want from your api.
        The attached PDF contains SAT practice problems across multiple pages. Each problem begins with a header containing the exact text 'Question ID' followed by an alphanumeric ID that is 8 characters in length. I am looking to get an array of all the unique question ids in the document. In my previous attempts with your api, I have had issues with you missing some ids, returning duplicates, and returning ids that appear to be made up and were not present in the document. Most importantly, I want to make sure that you don't miss any ids and don't make any up. I want to make sure that you don't get distracted or lose focus as you process the document, and that there are checks in place to make sure you don't miss any ids and don't make any up.
        
        Can you please suggest a prompt that will return an array of all the unique question ids in the document, with the goals above in mind?
    `

    const guidance_prompt_10 = `
        I have been trying to use your api to get the question ids from the attached pdf. I have tried many different prompts with varying results, but one question ID you always miss is "f8a698f7". Why is this one consistently more difficult than the rest for you to identify? How can I improve the prompt to make sure you capture this one?

        My latest prompt was:
        --previous prompt start--
        The attached PDF contains SAT practice problems across multiple pages. Each problem begins with a header containing the exact text 'Question ID' followed by an alphanumeric ID that is 8 characters in length. I am looking to get an array of all the unique question ids in the document.

        Please carefully scan through the document and perform the following steps:

        1. First pass: Scan through the document and every time you encounter the exact text 'Question ID', record the 8-character alphanumeric identifier that follows it.

        2. Second pass: Go through the document again independently and perform the same identification process, creating a second list.

        3. Compare both lists to ensure they match exactly. If there are any discrepancies, perform a third pass to resolve them.

        4. Remove any duplicates from the final list.

        5. For each ID in your final list, verify that you can find it in the original document by searching for 'Question ID' followed by that specific ID.

        6. Return only an array of the verified unique 8-character question IDs, sorted alphabetically.

        Please note: Only include IDs that follow the exact pattern of appearing after the text 'Question ID' in the document. Each ID should be exactly 8 characters long. Do not generate or infer any IDs - only include those explicitly present in the document.

        Please return a JSON array representing your final list of unique question ids.
        --previous prompt end--
    `

    const user_prompt_10 = `

        The attached PDF contains SAT practice problems across multiple pages. Each problem begins with a header containing the exact text 'Question ID' followed by an alphanumeric ID that is 8 characters in length. I am looking to get an array of all the unique question ids in the document.

        Please carefully scan through the document and perform the following steps:

        1. First pass: Scan through the document and every time you encounter the exact text 'Question ID', record the 8-character alphanumeric identifier that follows it.

        2. Second pass: Go through the document again independently and perform the same identification process, creating a second list.

        3. Compare both lists to ensure they match exactly. If there are any discrepancies, perform a third pass to resolve them.

        4. Remove any duplicates from the final list.

        5. For each ID in your final list, verify that you can find it in the original document by searching for 'Question ID' followed by that specific ID.

        6. Return only an array of the verified unique 8-character question IDs, sorted alphabetically.

        Please note: Only include IDs that follow the exact pattern of appearing after the text 'Question ID' in the document. Each ID should be exactly 8 characters long. Do not generate or infer any IDs - only include those explicitly present in the document.

        Please return a JSON array representing your final list of unique question ids.
    `

    const user_prompt_11 = `

        The attached PDF contains SAT practice problems across multiple pages. 

        Each problem in the document follows a consistent structure:
        - It begins with a header containing "Question ID" followed by an 8-character identifier
        - The header may be preceded by page information or other content
        - The header may be followed by mathematical expressions, equations, or other content

        When scanning the document:
        - Look for the exact phrase "Question ID" regardless of surrounding content
        - Always check the next 8 characters after each instance of "Question ID"
        - Do not let surrounding mathematical notation or complex formatting affect the identification process
        
        Please carefully scan through the document and perform the following steps:

        1. First pass: Scan through the document and every time you encounter the exact text 'Question ID', record the 8-character alphanumeric identifier that follows it. Look for the exact phrase "Question ID" regardless of surrounding content. Always check the next 8 characters after each instance of "Question ID". Do not let surrounding mathematical notation or complex formatting affect the identification process. Record the full context where it was found for verification.

        2. Second pass: Go through the document again independently and perform the same identification process, creating a second list.

        3. Compare both lists to ensure they match exactly. If there are any discrepancies, perform a third pass to resolve them.

        4. Remove any duplicates from the final list.

        5. For each ID in your final list, verify that you can find it in the original document by searching for 'Question ID' followed by that specific ID.

        6. Return only an array of the verified unique 8-character question IDs, sorted alphabetically.

        Please note: Only include IDs that follow the exact pattern of appearing after the text 'Question ID' in the document. Each ID should be exactly 8 characters long. Do not generate or infer any IDs - only include those explicitly present in the document.

        Please return a JSON array representing your final list of unique question ids.
    `

    //very close - returned 18, including the one it normally misses, but still missed one (2dfb2204)
    const user_prompt_12 = `
        Take the attached PDF, and do the following:
        1: Count how many times the exact text "Question ID" appears in the document, and note the page number where it appears.
        2: Go back to each instance of "Question ID" found, and note the 8-character alphanumeric identifier that follows it. Store this identifier in a list.
        3: Make sure that the length of the list of identifiers is the same as the count of "Question ID" found in step 1. If it is not, go back and find the missing identifiers.
        4: Return a JSON array of the 8-character alphanumeric identifiers, sorted by order of appearance in the document.
    `

    const user_prompt_13 = `
        Take the attached PDF, and do the following:
        1: Count how many times the exact text "Question ID" appears in the document, and note the page number and position where it appears.
        2: Go back to each instance of "Question ID" found, and note the 8-character alphanumeric identifier that follows it. Store this identifier in a list along with the page number and position where it was found.
        3: Make sure that the length of the list of identifiers is the same as the count of "Question ID" found in step 1. If it is not, go back and find the missing identifiers.
        4: Return a JSON object with the following fields:
            - question_id_count: the count of "Question ID" found in step 1
            - instances: an array of objects with the following fields:
                - page_number: the page number where the "Question ID" was found
                - id: the 8-character alphanumeric identifier that follows the "Question ID"
    `

    const user_prompt_14 = `
        Take the attached PDF, and do the following:
        
        1. Count how many times the exact text "Question ID" appears in the document, noting the page number for each occurrence. Look for the exact phrase "Question ID" regardless of surrounding content. Do not let surrounding mathematical notation or complex formatting affect the identification process. Store these occurrences for reference. Report this count back to me before moving on to step 2.
        2. Go back to each instance of "Question ID" found, and note the 8-character alphanumeric identifier that follows it. Store this identifier in a list along with the page number and position where it was found. Make sure that this is done for every single instance of "Question ID" found in step 1.
        3. Make sure that the length of the list of identifiers is the same as the count of "Question ID" found in step 1. If it is not, go back and find the missing identifiers.
        4. Return a JSON object with the following fields:
            - question_id_count: the total number of "Question ID" occurrences found in step 1
            - instances: an array of objects with the following fields:
                - page_number: the page number where the "Question ID" was found
                - id: the 8-character alphanumeric identifier that follows the "Question ID"
    `
    const user_prompt_15 = `
        Take the attached PDF, and do the following:
        
        1. Carefully scan through each page of the document, looking for the exact text "Question ID" regardless of surrounding content. Ignore all other content on the page, only concerning yourself with whether the text "Question ID" is present. If it is, note the page number where it was found.
        2. If there were any pages where the text "Question ID" was not found, go back to them and double check that you didn't miss it.
        3. Report back how many times the text "Question ID" was found in the document, and on which pages.
        4. Report back which pages didn't include the text "Question ID", and the first 100 characters of the page.
    `
    //did good - found 18
    const user_prompt_16 = `
        Your task is to find ALL question IDs in this document. Question IDs will be preceded by the text "Question ID". Be aware that due to PDF processing, the words "Question" and "ID" might:
        1. Appear split across page boundaries
        2. Have variations in spacing
        3. Have parts of the word split within a page

        Please search for:
        - "Question ID" as a complete phrase
        - "Question" and "ID" separately, checking if they form the pattern even across page breaks
        - Common variations like:
        - "Quest ion ID"
        - "Question I D"
        - "Questi onID"
        - Any other potential splits or spacing variations

        Process:
        1. First do a complete scan for the intact phrase "Question ID"
        2. Then do another pass looking for any instance of "Question" and check nearby text (including the next page) for "ID"
        3. Look for partial matches that might indicate split words
        4. For each potential match, examine the surrounding context to verify it's actually referring to a question identifier

        After finding each "Question ID" instance, carefully extract the ID that follows it which should be 8 alphanumeric characters long.

        Before submitting your response:
        - Cross-check the number of IDs found against the total number of questions in the document
        - Verify you've found close to 19 IDs (the known total)
        - If you have fewer, perform another pass with different splitting patterns

        Return your results as a valid JSON array of question IDs in order of appearance.
    `

    const user_prompt = `
        I've been trying to have you find all the question ids in the pdf, but you have been having trouble finding them all. I wonder if this might be due to the way that you process the pdf, that you see it differently than how it appears on a pdf viewer. Perhaps the phrase "Question ID" gets split between pages when you view it, or appears in different locations than where you expect it? Can you assess whether this is the case, and why you might be consistently failing to find all the ids?
    `
    
    const user_prompt_a = `
        Please carefully analyze the entire document from start to finish to extract a complete list of Question IDs found in the document.
        It is very important that you return the complete list of all unique question IDs in the whole document, and don't miss any.
        You should perform the following steps:
        1. First pass:
        - Scan through the document linearly
        - Every time you see "Question ID", extract and store the ID that follows it
        - Keep a running numbered list to ensure you don't lose track

        2. Final verification:
        - Count the number of times the phrase "Question ID" appears in the document
        - Verify that the length of your list of IDs is the same as this count
        - If there's a mismatch, scan the document again to find any missed IDs

        3. Return results:
        - Format the complete list of unique question IDs as a JSON array
        - Maintain the original order of appearance in the document
        - Your response should consist only of the JSON array with no additional text
        - Verify that the JSON can be parsed by JSON.parse() before returning

        
    `
    const user_prompt_2 = `
        Please carefully analyze the entire document from start to finish and perform the following steps:

        1. First pass:
        - Scan through the document linearly
        - Every time you see "Question ID", extract and store the ID that follows it
        - Keep a running numbered list to ensure you don't lose track

        2. Second pass:
        - Scan through the document again looking for any instances of question IDs that might appear in other formats or contexts
        - Add any new IDs you find to your list

        3. Final verification:
        - Count the total number of questions in the document
        - Verify that your list of IDs matches this count
        - If there's a mismatch, scan the document again to find any missed IDs

        4. Return results:
        - Format the complete list of unique question IDs as a JSON array
        - Maintain the original order of appearance in the document
        - Your response should consist only of the JSON array with no additional text
        - Verify that the JSON can be parsed by JSON.parse() before returning

        Example response format:
        ["5df44e78","a65952d9","bcbf0e45"]

        Please ensure the returned JSON array includes every single question ID from the document, with no omissions.
    `
    const user_prompt_3 = `
        Your task is to find ALL question IDs in this document. This is crucial - missing even one ID is a significant error.

        Process:
        1. First, identify how many total pages are in the document and how many questions you see in total.

        2. Then, do these passes through EVERY page:
        - Pass 1: Look for "Question ID"
        - Pass 2: Look for any strings matching the pattern of question IDs
        - Pass 3: Look for question numbers, test items, or any other indicators of questions that might have associated IDs
        - Pass 4: Check all metadata, headers, and footers for IDs

        3. For each ID you find, mark its page number and location on the page.

        4. Create a structured list showing:
        - Total questions found
        - Total unique IDs found
        - Any discrepancy between these numbers
        - Location details for each ID

        5. Only after completing this analysis, return just the JSON array of IDs in order of appearance:
        ["id1", "id2", ...]

        Before submitting your response, verify that:
        - You've examined every single page
        - You've cross-referenced your count of questions with your count of IDs
        - Your final count matches the document structure
        - The JSON is properly formatted for JSON.parse()

        If your count of IDs is less than 47, you must go back and search again as you have missed some.
    `
    while (attempts < 3 && !succeeded) {
        attempts++;
        const msg = await anthropic.beta.messages.create({
            model: 'claude-3-5-sonnet-latest', 
            betas: ["pdfs-2024-09-25", "prompt-caching-2024-07-31"],
            max_tokens: 8000, 
            system: system_prompt,
            messages: [
                {role: 'user', content: [
                    {
                        type: 'document',
                        source: {
                        media_type: 'application/pdf',
                        type: 'base64',
                        data: pdfBase64,
                        },
                        "cache_control": {"type": "ephemeral"}
                    },
                    {"type": "text", "text": user_prompt}
                ]}

            ]
        });
        question_ids = getProblemIDsFromAnthropicMsg(msg);
        succeeded = true;
        break;
    }
    return question_ids;
}

const getProblemsFromAnthropic = async (anthropic, pdfBase64, sample_json, test_section, all_problems, problem_ids = []) => {
    console.log('getProblemsFromAnthropic');
    console.log('all problems:')
    console.log(all_problems);
    console.log('problem ids:')
    console.log(problem_ids);
    let attempts = 0;
    let succeeded = false;
    let problems = [];
    while (attempts < 3 && !succeeded) {
        attempts++;
        const system_prompt = getSystemPrompt({sample_json: sample_json, section: test_section});
        let user_prompt = '';
        if (all_problems) {
            user_prompt = `
                Please convert all the problems in the attached pdf into a JSON array, using the guidance provided in the system prompt.
                Do not skip over any problems, even if the problem is a duplicate of one provided in the sample data.
                If you aren't sure how to format a question, do not leave it out - just do your best to process it and move on. 
                Process all problems from the document in a single response. 
                Do not stop short of processing and returning all the problems, unless that is the only way to avoid going over the token limit. 
                If you must stop short of returning all the problems, please do not stop in the middle of a problem - just stop at the end of the last problem you are able to fully complete.
            `;
        } else {
            user_prompt = `
                Please convert the problems with the following question ids into a JSON array, using the guidance provided in the system prompt.
                The problems I want you to convert are the ones with the following question ids: ${problem_ids.join(', ')}.
                Do not skip over any problems, even if the problem is a duplicate of one provided in the sample data.
                If you aren't sure how to format a question, do not leave it out - just do your best to process it and move on. 
                Process all of the specified problems in a single response. 
                Do not stop short of processing and returning all the specified problems, unless that is the only way to avoid going over the token limit. 
                If you must stop short of returning all the specified problems, please do not stop in the middle of a problem - just stop at the end of the last problem you are able to fully complete.
            `;
        }
        user_prompt += `
            Your response should consist only of the JSON array, with no additional text.
            You should make sure that your JSON response is formatted correctly. Double check that it can be parsed by the javascript function JSON.parse() without throwing an error. If that causes an error, you should try to fix the error and return the correct JSON string.
        `;
        try {
            const msg = await anthropic.beta.messages.create({
                model: 'claude-3-5-sonnet-latest', 
                betas: ["pdfs-2024-09-25", "prompt-caching-2024-07-31"],
                max_tokens: 8000, 
                system: system_prompt,
                messages: [
                    {role: 'user', content: [
                        {
                            type: 'document',
                            source: {
                            media_type: 'application/pdf',
                            type: 'base64',
                            data: pdfBase64,
                            },
                            "cache_control": {"type": "ephemeral"}
                        },
                        {"type": "text", "text": user_prompt}
                    ]}

                ]
            });
            problems = getProblemsFromAnthropicMsg(msg);
            succeeded = true;
            break;
        } catch(err) {
            console.log('error getting problems from anthropic');
            console.log(err);
            if (attempts == 3) {
                console.log('failed to get problems from anthropic after 3 attempts');
                console.log(err);
                throw err;
            }
            console.log('retrying...');
        }
    }
    return problems;
}



const originalEventHandler = eventHandler(async (event) => {
    assertMethod(event, "POST");
    console.log('add problems from supabase pdf 10')
    let user = null;
    
    const response = {};
    let identified_problem_ids = [];
    let processed_question_ids = [];
    let failed_question_ids = [];
    let remaining_problem_ids = [];
    try {
        const user = await serverSupabaseUser(event);
        console.log('supabase user created')
        console.log(user);
        if (!user || !user.id) {
            return { status: 'error', message: 'user not found'};
        }
        const user_id = user.id;
        console.log('user id:')
        console.log(user_id);
        const client = serverSupabaseServiceRole(event)
        
        
        const body = await readBody(event);
        const from_test = body.from_test;
        const file_url = body.file_url;
        console.log('file url:')
        console.log(file_url);
        const file_path = file_url.split('PDFs/')[1];
        console.log('file path:')
        console.log(file_path);
        let test_section = body.test_section || 'mixed';
        console.log('test section:')
        console.log(test_section);
        const cb_domain = body.cb_domain;
        const cb_skill = body.cb_skill;
        const expected_problem_count = parseInt(body.problem_count);
        console.log(body);
        const resp_data_to_show = {};
        
        

        const { data, error } = await client.storage.from('Problem PDFs').download(file_path);
        console.log('got pdf')
        if (error) {
            console.log('error:')
            console.log(error);
        }
        if (data) {
            console.log('got data');
        } else {
            console.log('no data');
            return { status: 'error', message: 'no data'};
        }
        const arrayBuffer = await data.arrayBuffer();
        const pdfBase64 = Buffer.from(arrayBuffer).toString('base64');
        console.log('got base64');
        console.log(pdfBase64.slice(0, 100));
        
        
        let sample_problem_ids = [];
        if (test_section == 'math') {
            sample_problem_ids = math_sample_problem_ids;
        } else if (test_section == 'reading_writing') {
            sample_problem_ids = reading_writing_sample_problem_ids;
        } else {
            sample_problem_ids = math_sample_problem_ids.concat(reading_writing_sample_problem_ids);
        }
        console.log('sample problem ids:')
        console.log(sample_problem_ids);
        //const { data: sample_data, error: sample_error } = await client.from('sat_problems').select('test_section, source_question_id:question_id, cb_domain:domain, cb_skill:skill, question_text, question_html, question_json, answer_type, answer_choices, mult_choice_answer, input_answers, difficulty, contains_graphic, source_solution:solution').in('id', sample_problem_ids);
        let { data: sample_problems, error: sample_error } = await client.from('sat_problems').select('test_section, question_id:source_question_id, domain:cb_domain, skill:cb_skill, question_text, question_json, answer_type, answer_choices, mult_choice_answer, input_answers, difficulty, contains_graphic, solution:source_solution').in('id', sample_problem_ids);
        if (sample_error) {
            console.log('error:')
            console.log(sample_error);
            return { status: 'error', message: 'error getting sample data'};
        }
        if (sample_problems) {
            //console.log(sample_problems[0]);
        } else {
            console.log('no sample data');
        }
        const anthropic = new Anthropic({apiKey: process.env.ANTHROPIC_API_KEY});
        console.log('formed anthropic client')
        //let sample_ids = sample_problems.map(problem => problem.question_id);
        //let sample_data = {question_ids: sample_ids, problems: sample_problems};
        sample_problems = sample_problems.map(problem => {
            problem.solution_json = problem.solution.json;
            delete problem.solution;
            return problem;
        });
        let sample_json = JSON.stringify(sample_problems);
        console.log('sample problems');
        console.log(sample_json);
        const problem_ids = await getProblemIDsFromAnthropic(anthropic, pdfBase64, sample_json, test_section);
        console.log('identified problem ids');
        console.log(problem_ids);
        identified_problem_ids = problem_ids;
        response.identified_problem_ids = problem_ids;
        resp_data_to_show.problems_identified = problem_ids.length;
        let problems = await getProblemsFromAnthropic(anthropic, pdfBase64, sample_json, test_section, true);
        
        processed_question_ids = problems.filter(problem => !!problem.question_id).map(problem => problem.question_id);
        console.log('processed question ids:')
        console.log(processed_question_ids);
        
        const format_options = {from_test: from_test, test_section: test_section, cb_domain: cb_domain, cb_skill: cb_skill};
        let { db_problems, question_ids, just_failed_question_ids } = await saveProblemsToDB(client, problems, format_options, user_id);
        failed_question_ids = failed_question_ids.concat(just_failed_question_ids);
        console.log('saved problems');
        console.log(db_problems.length);
        
        for (let problem_id of problem_ids) {
            if (!processed_question_ids.includes(problem_id)) {
                remaining_problem_ids.push(problem_id);
            }
        }
        let extra_attempts = 0;
        while (remaining_problem_ids.length > 0) {
            extra_attempts++;
            if (extra_attempts > 3) {
                console.log('Failed to add all problems');
                break;
            }
            let more_problems = await getProblemsFromAnthropic(anthropic, pdfBase64, sample_json, test_section, false, remaining_problem_ids);
            let more_question_ids = more_problems.filter(problem => !!problem.question_id).map(problem => problem.question_id);
            processed_question_ids = processed_question_ids.concat(more_question_ids);
            let { db_problems: new_db_problems, question_ids: new_question_ids, failed_question_ids: just_failed_question_ids } = await saveProblemsToDB(client, more_problems, format_options, user_id);
            db_problems = db_problems.concat(new_db_problems);
            for (let failed_question_id of just_failed_question_ids) {
                if (!failed_question_ids.includes(failed_question_id)) {
                    failed_question_ids.push(failed_question_id);
                }
            }
            remaining_problem_ids = remaining_problem_ids.filter(problem_id => !processed_question_ids.includes(problem_id));
        }
        resp_data_to_show.problems_processed = db_problems.length;
        response.status = 'OK';
        response.summary = resp_data_to_show;
        response.processed_question_ids = processed_question_ids;
        response.failed_question_ids = failed_question_ids;
        response.unparsed_question_ids = remaining_problem_ids;
        return response;
    } catch (err) {
        console.log('error:')
        console.log(err);
        response.status = 'error';
        response.message = 'error adding problems';
        response.error = err;
        response.identified_problem_ids = identified_problem_ids;
        response.processed_question_ids = processed_question_ids;
        response.failed_question_ids = failed_question_ids;
        response.unparsed_question_ids = remaining_problem_ids;
        return response;
    }
});

export default eventHandler(async (event) => {
  const body = await readBody(event);
  
  try {
    // Trigger the job
    const { id: jobId } = await client.sendEvent({
      name: "sat.problems.process",
      payload: {
        fileData: body.fileData,
        testSection: body.testSection,
        userId: body.userId
      },
    });

    return {
      jobId,
      status: 'queued'
    };

  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error.message
    });
  }
});
