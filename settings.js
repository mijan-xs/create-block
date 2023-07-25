
import { __ } from '@wordpress/i18n';
import { memo, useEffect } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import {
	__experimentalBoxControl as BoxControl,
	__experimentalHeading as Heading,
	__experimentalDivider as Divider,
	__experimentalSpacer as Spacer,
} from '@wordpress/components';
import GkitTabs from '@/components/tabs';
import GkitPanelBody from '@/components/panel-body';
import GkitResponsive from '@/components/responsive';
import BlockStyle from './style';
import gkitResponsiveValue from '@/helper/gkitResponsiveValue';
import useFontFamilyinBlock from '@/helper/useFontFamilyinBlock';
import responsiveHelper from '@/helper/responsiveHelper';

const Settings = ({ attributes, setAttributes, device, advancedControl }) => {
        const components = window.gutenkit.components;
	const { 
	    	GkitBoxShadow, 
	    	GkitColor, 
            	GkitIconPicker, 
		GkitPanelBody, 
		GkitRepeater, 
		GkitResponsive, 
		GkitSwitcher, 
		GkitTabs, 
		GkitTypography, 
		GkitBackgrounGroup, 
		GkitText, 
		GkitSlider 
	    } = components;
	
	//Block Style
	useEffect(() => {
		let blockStyle = BlockStyle(attributes);
		setAttributes({
			blocksCSS: blockStyle
		});
	}, [
		attributes?.blockID,
		attributes?.blockClass,
        //add more dependencies here
	])

	//load font family
	useFontFamilyinBlock([
        //add more typography dependencies here
		//attributes?.titleTypography,
	])

	return (
		<>
			<InspectorControls>
				<GkitTabs
					type="top-level"
					tabs={[
						{
							name: 'content',
							title: __('Content', 'gutenbergkit'),
						},
						{
							name: 'style',
							title: __('Style', 'gutenbergkit'),
						},
						{
							name: 'advanced',
							title: __('Advanced', 'gutenbergkit'),
						},
					]}
				>
					{
						(tab) => {
							switch (tab.name) {
								case 'content':
									return (
										<>
											<GkitPanelBody title={__('Content', 'gutenbergkit')}>
                                                <Heading>Start Writting</Heading>
                                            </GkitPanelBody>
                                        </>
                                    )
                                case 'style':
                                    return (
                                        <>
                                            <GkitPanelBody title={__('Style', 'gutenbergkit')}>
                                                <Heading>Start Writting</Heading>
                                            </GkitPanelBody>
                                        </>
                                    )
								case 'advanced':
									return (
										<>
											{advancedControl}
										</>
									)
							}
						}
					}
				</GkitTabs>
			</InspectorControls>
		</>
	)
}

export default memo(Settings);
