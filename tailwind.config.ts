import type { Config } from 'tailwindcss';
import { join } from "path";

import { skeleton } from "@skeletonlabs/tw-plugin";
import { greenie } from "./src/theme";

const config: Config = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),],

	theme: {
		extend: {}
	},

	plugins: [
		skeleton({
			themes: {
				custom: [greenie]
			}
		})
	]
};

module.exports = config;
