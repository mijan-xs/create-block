
import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames'

export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		id: 'block-' + attributes?.blockID,
	});

	return (
		<div {...blockProps}>
			{ /* Your markup goes here */ }
		</div>
	);
}
