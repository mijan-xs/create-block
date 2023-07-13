import { backgroundGenerator, fillBackgroundGenerator } from "@/helper/backgroundGenerator";
import { getBorderValue, getBoxValue, getSliderValue, getTextShadowValue, getTypographyValue } from "@/helper/get-css";
import { parseCSS } from "@/helper/parse-css";

const BlockStyle = (attributes) => {
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