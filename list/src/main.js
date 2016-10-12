/*
import THEME from 'mobile/theme';

/* Skins, styles, and textures */

let blackSkin = new Skin({ fill: 'black' });


/* Handlers */
class MainHandlerBehavior extends MODEL.ScreenBehavior {
Handler.bind("/main", new MainHandlerBehavior);

class DetailsHandlerBehavior extends MODEL.ScreenBehavior {
	hasSelection(data, delta) {
}

/* UI templates */
let SushiLine = Column.template($ => ({
	left: 0, right: 0, active: true, skin: THEME.lineSkin, 
	Behavior: SCREEN.ListItemBehavior, 
	contents: [
			contents: [
		}),
}));

	skin: blackSkin, 
	contents: [
}));

class RearrangingBehavior extends Behavior {
	onCreate(layout, data) {
}

	contents: [
			contents: [
					contents: [ Picture($, { left: 0, right: 0, top: 0, bottom: 0, aspect: 'fit', url: $.image, }) ]
				}),
					contents: [
							contents: [
						}),
				}),
		}),
}));

class ListItemBehavior extends SCREEN.ListBehavior {
	addItemLine(list, item) {
}
	contents: [
			contents: [
					contents: [
							Behavior: ListItemBehavior
						}),
				}),
		}),
}));

/* Application set-up */