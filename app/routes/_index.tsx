import type {
	ActionFunction,
	ActionFunctionArgs,
	MetaFunction,
} from "@remix-run/node";
import { PlateEditor } from "~/components/plate-editor.client";
import { ClientOnly } from "remix-utils/client-only";
import { Form } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export const action: ActionFunction = async ({
	request,
}: ActionFunctionArgs) => {
	const formData = await request.formData();

	const editorContent = formData.get("editorContent");
	console.log("Editor Content:", editorContent);

	return null;
};

export default function Index() {
	return (
		<div className="font-sans p-4 space-y-2">
			<Form method="post">
				<ClientOnly fallback={<p>Loading Editor</p>}>
					{() => <PlateEditor />}
				</ClientOnly>
				<button type="submit">Submit</button>
			</Form>
		</div>
	);
}
