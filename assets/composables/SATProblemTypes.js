export const cb_domains = [
    { id: 'algebra', label: 'Algebra', section: 'math' },
    { id: 'advanced_math', label: 'Advanced Math', section: 'math' },
    { id: 'problem_solving_and_data_analysis', label: 'Problem Solving and Data Analysis', section: 'math' },
    { id: 'geometry_and_trigonometry', label: 'Geometry and Trigonometry', section: 'math' }, 
    { id: 'information_and_ideas', label: 'Information and Ideas', section: 'reading_writing' },
    { id: 'craft_and_structure', label: 'Craft and Structure', section: 'reading_writing' },
    { id: 'standard_english_conventions', label: 'Standard English Conventions', section: 'reading_writing' },
    { id: 'expression_of_ideas', label: 'Expression of Ideas', section: 'reading_writing' }
]

const cb_domain_lookup = {};
cb_domains.forEach(domain => {
    cb_domain_lookup[domain.id] = domain;
});

export const getCbDomainLookup = () => {
    return cb_domain_lookup;
}

export const cb_domains_by_section = {
    'math': ['algebra', 'advanced_math', 'problem_solving_and_data_analysis', 'geometry_and_trigonometry'],
    'reading_writing': ['information_and_ideas', 'craft_and_structure', 'standard_english_conventions', 'expression_of_ideas']
}

export const cb_skills = [
    { id: 'systems_of_two_linear_equations_in_two_variables', 
      label: 'Systems of two linear equations in two variables', 
      section: 'math',
      domain: 'algebra'
    },
    { id: 'linear_functions', 
      label: 'Linear functions',
      section: 'math',
      domain: 'algebra'
    },
    { id: 'linear_equations_in_two_variables', 
      label: 'Linear equations in two variables',
      section: 'math',
      domain: 'algebra'
    },
    { id: 'linear_equations_in_one_variable', 
      label: 'Linear equations in one variable',
      section: 'math',
      domain: 'algebra'
    },
    { id: 'linear_inequalities_in_one_or_two_variables', 
      label: 'Linear inequalities in one or two variables',
      section: 'math',
      domain: 'algebra'
    },
    { id: 'nonlinear_equations_in_one_variable_and_systems_of_equations_in_two_variables', 
      label: 'Nonlinear equations in one variable and systems of equations in two variables',
      section: 'math',
      domain: 'advanced_math'
    },
    { id: 'nonlinear_functions', 
      label: 'Nonlinear functions',
      section: 'math',
      domain: 'advanced_math'
    },
    { id: 'equivalent_expressions', 
      label: 'Equivalent expressions',
      section: 'math',
      domain: 'advanced_math'
    },
    { id: 'ratios_rates_proportional_relationships_and_units', 
      label: 'Ratios, rates, proportional relationships, and units',
      section: 'math',
      domain: 'problem_solving_and_data_analysis'
    },
    { id: 'percentages', 
      label: 'Percentages',
      section: 'math',
      domain: 'problem_solving_and_data_analysis'
    },
    { id: 'two_variable_data_models_and_scatterplots', 
      label: 'Two-variable data: Models and scatterplots',
      section: 'math',
      domain: 'problem_solving_and_data_analysis'
    },
    { id: 'probability_and_conditional_probability', 
      label: 'Probability and conditional probability',
      section: 'math',
      domain: 'problem_solving_and_data_analysis'
    },
    {
      id: 'one_variable_data_distributions_and_measures_of_center_and_spread',
      label: 'One-variable data: Distributions and measures of center and spread',
      section: 'math',
      domain: 'problem_solving_and_data_analysis'
    },
    { id: 'inference_from_sample_statistics_and_margin_of_error', 
      label: 'Inference from sample statistics and margin of error',
      section: 'math',
      domain: 'problem_solving_and_data_analysis'
    },
    { id: 'lines_angles_and_triangles', 
      label: 'Lines, angles, and triangles',
      section: 'math',
      domain: 'geometry_and_trigonometry'
    },
    { id: 'circles', 
      label: 'Circles',
      section: 'math',
      domain: 'geometry_and_trigonometry'
    },
    { id: 'area_and_volume', 
      label: 'Area and volume',
      section: 'math',
      domain: 'geometry_and_trigonometry'
    },
    { id: 'right_triangles_and_trigonometry', 
      label: 'Right triangles and trigonometry',
      section: 'math',
      domain: 'geometry_and_trigonometry'
    }, 
    { id: 'words_in_context', 
      label: 'Words in Context',
      section: 'reading_writing',
      domain: 'craft_and_structure', 
    }, 
    { id: 'text_structure_and_purpose', 
      label: 'Text Structure and Purpose',
      section: 'reading_writing',
      domain: 'craft_and_structure', 
    }, 
    { id: 'cross_text_connections', 
      label: 'Cross-Text Connections',
      section: 'reading_writing',
      domain: 'craft_and_structure', 
    }, 
    { id: 'central_ideas_and_details', 
      label: 'Central Ideas and Details',
      section: 'reading_writing',
      domain: 'information_and_ideas', 
    }, 
    { id: 'inferences', 
      label: 'Inferences',
      section: 'reading_writing',
      domain: 'information_and_ideas', 
    }, 
    { id: 'command_of_evidence', 
      label: 'Command of Evidence',
      section: 'reading_writing',
      domain: 'information_and_ideas', 
    },
    { id: 'boundaries', 
      label: 'Boundaries',
      section: 'reading_writing',
      domain: 'standard_english_conventions', 
    },
    { id: 'form_structure_and_sense', 
      label: 'Form, Structure, and Sense',
      section: 'reading_writing',
      domain: 'standard_english_conventions', 
    }, 
    { id: 'rhetorical_synthesis', 
      label: 'Rhetorical Synthesis',
      section: 'reading_writing',
      domain: 'expression_of_ideas', 
    },
    { id: 'transitions', 
      label: 'Transitions',
      section: 'reading_writing',
      domain: 'expression_of_ideas', 
    }
];

const cb_skill_lookup = {};
cb_skills.forEach(skill => {
    cb_skill_lookup[skill.id] = skill;
});

export const getCbSkillLookup = () => {
    return cb_skill_lookup;
}

const cb_skills_by_domain = {};
cb_skills.forEach(skill => {
    if (!cb_skills_by_domain[skill.domain]) {
        cb_skills_by_domain[skill.domain] = [];
    }
    cb_skills_by_domain[skill.domain].push(skill);
});

export const getCbSkillsByDomain = () => {
    return cb_skills_by_domain;
}

export const getCbSectionSkillIDs = (section) => {
    const skills = cb_skills.map(skill => skill.id).filter(skill_id => cb_skill_lookup[skill_id].section == section);
    return skills;
}

export const getCbSkillIDs = () => {
  return cb_skills.map(skill => skill.id);
}