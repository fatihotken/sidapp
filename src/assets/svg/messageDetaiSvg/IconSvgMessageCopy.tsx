import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const IconSvgMessageCopy: React.FC<SvgProps> = props => {
	return (
		<Svg {...props} width={17} height={17} viewBox="0 0  17 17" fill="none">
			<Path d="M10.6251 2.125H6.37508C4.81027 2.125 3.54175 3.39353 3.54175 4.95833V10.625" stroke="white" stroke-width="1.5" />
			<Path
				d="M6.41675 8.14583C6.41675 7.29767 6.41786 6.72431 6.46692 6.28919C6.51427 5.86918 6.59821 5.67177 6.70089 5.53795C6.77404 5.44262 6.85937 5.35729 6.9547 5.28414C7.08852 5.18146 7.28592 5.09752 7.70594 5.05017C8.14106 5.00112 8.71441 5 9.56258 5C10.4107 5 10.9841 5.00112 11.4192 5.05017C11.8392 5.09752 12.0366 5.18146 12.1705 5.28414C12.2658 5.35729 12.3511 5.44262 12.4243 5.53795C12.527 5.67177 12.6109 5.86918 12.6582 6.28919C12.7073 6.72431 12.7084 7.29767 12.7084 8.14583V10.9792C12.7084 11.8273 12.7073 12.4007 12.6582 12.8358C12.6109 13.2558 12.527 13.4532 12.4243 13.587C12.3511 13.6824 12.2658 13.7677 12.1705 13.8409C12.0366 13.9435 11.8392 14.0275 11.4192 14.0748C10.9841 14.1239 10.4107 14.125 9.56258 14.125C8.71441 14.125 8.14106 14.1239 7.70594 14.0748C7.28592 14.0275 7.08852 13.9435 6.9547 13.8409C6.85937 13.7677 6.77404 13.6824 6.70089 13.587C6.59821 13.4532 6.51427 13.2558 6.46692 12.8358C6.41786 12.4007 6.41675 11.8273 6.41675 10.9792V8.14583Z"
				stroke="white"
				stroke-width="1.5"
			/>
		</Svg>
	);
};
export default IconSvgMessageCopy;
