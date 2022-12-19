
import { E2eConstants } from '../utils';




fixture `board tests`
	.page(E2eConstants.URL)
    .beforeEach(async (t) => {
		await t
			.maximizeWindow()
    })


test
	.meta({ smoke: 'true', regression: 'true'})
("Create new board, add work item, move work item, archive work item and remove board", async (t) => {

})
