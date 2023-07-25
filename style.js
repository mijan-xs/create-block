const BlockStyle = (attributes) => {
    const helpers = window.gutenkit.helpers;
	const {
        parseCSS,
        backgroundGenerator,
        getBoxShadowValue,
        getBoxValue,
        getBorderValue,
        getTypographyValue,
        getSliderValue
    } = helpers;
    const WRAPPER = attributes.blockClass;
	
	const rawSyle = {
		desktop: [
			{
				selector: `.${WRAPPER}`,
			},
		],
		tablet: [
			{
				selector: `.${WRAPPER}`,
			},
		],
		mobile: [
			{
				selector: `.${WRAPPER}`,
			},
		]
	}

	return parseCSS(rawSyle);
}

export default BlockStyle;
