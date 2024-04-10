/// <reference lib="dom" />

import React from 'react';


type SBProps = {
	slot?: 'top' | 'bottom';
	story: {
		name: string;
		created_at: string;
		published_at: string;
		id: number;
		uuid: string;
		content: {
			_uid: string;
			network: string[];
			subType: string;
			topSlot: string;
			component: string;
			bottomSlot: string;
			defaultSKU: string;
			familyCode: string;
			familyName: string;
			manufacturer: string;
			productPhotos: {
				id: number;
				alt: string;
				name: string;
				focus: string;
				title: string;
				source: string;
				filename: string;
				copyright: string;
				fieldtype: string;
				meta_data: {
					alt: string;
					title: string;
					source: string;
					copyright: string;
				};
				is_private: boolean;
			}[];
			productVideos: {
				id: number;
				alt: string;
				name: string;
				focus: string;
				title: string;
				source: string;
				filename: string;
				copyright: string;
				fieldtype: string;
				meta_data: {
					alt: string;
					title: string;
					source: string;
					copyright: string;
				};
			is_private: boolean;
			}[];
			longDescription: string;
			operatingSystem: string;
			shortDescription: {
				type: string;
				content: {
					type: string;
					content: {
						text: string;
						type: string;
						marks?: {
							type: string;
						}[];
					}[];
				}[];
			};
			productSubCategory: string;
			productFamilyCategory: string;
			searchEngineOptimization: {
				_uid: string;
				title: string;
				plugin: string;
				og_image: string;
				og_title: string;
				description: string;
				twitter_image: string;
				twitter_title: string;
				og_description: string;
				twitter_description: string;
			};
			_editable: string;
		};
		slug: string;
		full_slug: string;
		sort_by_date: any;
		position: number;
		tag_list: string[];
		is_startpage: boolean;
		parent_id: number;
		meta_data: any;
		group_id: string;
		first_published_at: string;
		lang: string;
		path: any;
	};
}

const SBcomponent = ({ slot = 'top', story }: SBProps): React.ReactNode => {
	if (!story) {
	  return <div><span>Loading...</span></div>;
	}
  
	let slotContent = story.content.bottomSlot;
	if (slot === 'top') {
	  slotContent = story.content.topSlot;
	}
  
	slotContent.replace('\n\n', '<br />');
  
	return (
	  <div>
		<p>{slotContent}</p>
	  </div>
	);
}

export default SBcomponent