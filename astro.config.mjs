// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';

// https://astro.build/config
export default defineConfig({
	site: 'https://awsugbne.github.io',
	base: '/kiro-workshop-feb26',
	integrations: [
		starlight({
			plugins: [starlightImageZoom()],
			title: 'Kiro IDE Workshop',
			description: 'A hands-on workshop guide for Kiro IDE — spec-driven development for the Brisbane AWS User Group Meetup.',
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Welcome & Sign In', slug: 'getting-started/welcome-and-signin' },
						{ label: 'Workspace & Credits', slug: 'getting-started/workspace-and-credits' },
					],
				},
				{
					label: 'Core Concepts',
					items: [
						{ label: 'Spec vs Vibe Coding', slug: 'core-concepts/spec-vs-vibe' },
						{ label: 'Context & Prompting', slug: 'core-concepts/context-and-prompting' },
					],
				},
				{
					label: 'Spec-Driven Development',
					items: [
						{ label: 'Refining Your Prompt', slug: 'spec-driven/refining-your-prompt' },
						{ label: 'Generating Specs', slug: 'spec-driven/generating-specs' },
						{ label: 'Design & Architecture', slug: 'spec-driven/design-and-architecture' },
						{ label: 'Implementation Planning', slug: 'spec-driven/implementation-planning' },
					],
				},
				{
					label: 'Configuring Kiro',
					items: [
						{ label: 'Task Lists & Steering Docs', slug: 'configuring/task-lists-and-steering' },
						{ label: 'Refining Steering Docs', slug: 'configuring/refining-steering-docs' },
						{ label: 'Agent Hooks', slug: 'configuring/agent-hooks' },
						{ label: 'Powers', slug: 'configuring/powers' },
						{ label: 'MCP Servers', slug: 'configuring/mcp-servers' },
					],
				},
				{
					label: 'Executing the Build',
					items: [
						{ label: 'Running Tasks', slug: 'executing/running-tasks' },
						{ label: 'Completion & Verification', slug: 'executing/completion' },
					],
				},
				{
					label: 'Testing & Running',
					items: [
						{ label: 'README & Setup', slug: 'testing/readme-and-setup' },
						{ label: 'Running & Testing the App', slug: 'testing/running-the-app' },
					],
				},
				{
					label: 'Iteration',
					items: [
						{ label: 'Checkpointing & Restore', slug: 'iteration/checkpointing' },
						{ label: 'Iterating with Specs', slug: 'iteration/iterating-with-specs' },
						{ label: 'Inline Chat', slug: 'iteration/inline-chat' },
					],
				},
				{
					label: 'Advanced',
					items: [
						{ label: 'CLI Workflows', slug: 'advanced/cli-workflows' },
						{ label: 'Open Weight Models', slug: 'advanced/open-weight-models' },
						{ label: 'Promptz & Community', slug: 'advanced/promptz-and-community' },
					],
				},
				{
					label: 'Resources',
					items: [
						{ label: 'Further Learning', slug: 'resources' },
					],
				},
			],
		}),
	],
});
