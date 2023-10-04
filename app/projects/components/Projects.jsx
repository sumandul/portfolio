import { ProjectItem } from "../../sections";

export function Projects() {
	const projects= [
		{
			title:"hello",
			src:"../s.png"
		},
		{
			title:"hello",
			src:"../s.png"
		},
		{
			title:"hello",
			src:"../s.png"
		},
	]
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
			{projects
			
				?.map((project, index) => (
					<ProjectItem key={project._id} project={project} index={index} />
				))}
		</div>
	);
}
