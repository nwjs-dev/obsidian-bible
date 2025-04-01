import {Plugin} from "obsidian"

export default class BiblePlugin extends Plugin {
	onload(): Promise<void> | void {
		console.log("Hello Nicolas!")
	}

}
