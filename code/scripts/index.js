
// Imports
import data from '../data/data.yml';
import Snap from 'snapsvg';

// Template
const template = `
	<div class="container">
    <div class="centered">
			<div class="wheel">
				<div
					class="segment"
					v-for="(segment, index) in data.segments"
					v-bind:style="{'--offset': ((100 / data.segments.length) * index), '--value': (100 / data.segments.length), '--bg': segment.colour}"
					v-on:click="showInfo(segment.title);">
					<i class="fa" v-html="segment.icon"></i>
				</div>
			</div>
    </div>
	</div>
`;

// Controller
export const index = {
    template: template,
		data: () => {
				return {
					data: data.data
        };
    },
    methods: {
			showInfo: (type) => {
				alert(type);
			}
    },
		created: function() {

    }
};
