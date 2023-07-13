import { __ } from '@wordpress/i18n';
import './editor.scss';
import Settings from './settings';
import useDeviceType from '@/helper/useDeviceType';
import classnames from 'classnames'
import {
	useBlockProps,
} from '@wordpress/block-editor';
import GkitStyle from '@/components/style-tag';

export default function Edit({ attributes, setAttributes, clientId, advancedControl }) {
	const device = useDeviceType();
	const blockProps = useBlockProps();

	return (
		<>
			<GkitStyle 
				blocksCSS ={attributes?.blocksCSS}
			/>

			<Settings
				attributes={attributes}
				setAttributes={setAttributes}
				device={device}
				advancedControl={advancedControl}
			/>

			<div {...blockProps}>
				{ /* Your markup goes here */ }
			</div>
		</>
	);
}
