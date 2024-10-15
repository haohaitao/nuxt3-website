module.exports = {
	extends: ['@commitlint/config-angular'],
	parserPreset: {
		parserOpts: {
			headerPattern: /^(.*?)(?:\((.*)\))?:?\s(.*)$/,
			headerCorrespondence: ['type', 'scope', 'subject'],
		},
	},
	rules: {
		'type-case': [0],
		'type-empty': [2, 'never'],
		'type-enum': [2, 'always', ['build', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test']],
		'scope-empty': [2, 'never'],
		'subject-empty': [2, 'never'],
	},
	prompt: {
		settings: {},
		skip: ['body', 'footer', 'issues'],
		messages: {
			skip: 'Enter and skip directly',
			max: 'Maximum of %d characters',
			min: '%d chars at least',
			emptyWarning: 'The content cannot be empty, please re-enter',
			upperLimitWarning: 'over limit',
			lowerLimitWarning: 'below limit',
		},
		questions: {
			type: {
				description: 'Please select the submission type',
				enum: {
					feat: {
						description: '🚀  A new feature',
						title: 'feat',
						emoji: '🚀',
					},
					fix: {
						description: '🐛  A bug fix',
						title: 'Bug Fixes',
						emoji: '🐛',
					},
					docs: {
						description: '📝  Documentation only changes',
						title: 'Documentation',
						emoji: '📝',
					},
					style: {
						description: '💎  Changes that do not affect the meaning of the code',
						title: 'Styles',
						emoji: '💎',
					},
					refactor: {
						description: '🌠 A code change that neither fixes a bug nor adds a feature',
						title: 'Code Refactoring',
						emoji: '🌠',
					},
					perf: {
						description: '⚡️ A code change that improves performance',
						title: 'Performance Improvements',
						emoji: '⚡️',
					},
					test: {
						description: '✅ Adding missing tests or correcting existing tests',
						title: 'Tests',
						emoji: '✅',
					},
					build: {
						description: '📦️   Changes that affect the build system or external dependencies',
						title: 'build',
						emoji: '📦',
					},
					ci: {
						description: '⚙️ Changes to our CI configuration files and scripts',
						title: 'Continuous Integrations',
						emoji: '⚙️',
					},

					revert: {
						description: '🔂 Reverts a previous commit',
						title: 'Reverts',
						emoji: '🔂',
					},
				},
			},
			scope: {
				description: 'Please enter the scope of modification (required)',
			},
			subject: {
				description: 'Please briefly describe the submission (required)',
			},
			body: {
				description: 'Please provide a detailed description (optional)',
			},
			isBreaking: {
				description: 'Is there any breakthrough change?',
			},
			breakingBody: {
				description:
					'A destructive change submission requires a subject. Please enter a longer description of the submission itself',
			},
			breaking: {
				description: 'Describe the breaking changes',
			},
			isIssueAffected: {
				description: 'Are there any unresolved issues?',
			},
			issuesBody: {
				description:
					'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
			},
			issues: {
				description: 'Please enter the problem description',
			},
		},
	},
};
