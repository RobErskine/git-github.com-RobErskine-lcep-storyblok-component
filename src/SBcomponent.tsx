import * as React from 'react';
import { renderRichText } from "@storyblok/react";
import { ISbRichtext } from '@storyblok/react';

/*
Create video showing how to use the SB component
top: text
bottom: richText
promotion: text / image / link
video: mp4
*/

type SBProps = {
  slot?: 'top' | 'bottom' | 'promotion' | 'video';
  story: {
    name: string;
    created_at: string;
    published_at: string;
    id: number;
    uuid: string;
    content: {
      _uid: string;
      network: string[];
      promotionContent: ISbRichtext;
      promotionLink: {
        id: string;
        url: string;
        linkType: string;
        fieldType: string;
        cached_url: string;
      };
      showPromotion: boolean;
      promotionImage: {
        id: number;
        alt: string;
        name: string;
        focus: string;
        title: string;
        source: string;
        filename: string;
        copyright: string;
        fieldtype: string;
        meta_data: Record<string, any>;
        is_private: boolean;
        is_external_url: boolean;
    };    
      subType: string;
      topSlot: ISbRichtext;
      component: string;
      bottomSlot: ISbRichtext;
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

export default ({ slot = 'top', story }: SBProps): React.ReactElement => {
  if (!story) {
    return <div><span>Loading...</span></div>;
  }

  const topSlotContent = renderRichText(story.content.topSlot);
  const promotionContent = renderRichText(story.content.promotionContent);
  const bottomSlotContent = renderRichText(story.content.bottomSlot);

  // top slot
  if (slot === 'top') {
    return (<div>{topSlotContent}</div>) 
  }
  // bottom slot
  else if (slot === 'bottom') {
    return (<div>{bottomSlotContent}</div>)
  }
  // video slot
  else if (slot === 'video') {
    return (
      <div className="lcep-video">
        <video controls>
          <source src={story.content.productVideos[0].source} type="video/mp4" />
        </video>
      </div>
    )
  }
  // promotion slot
  else if (slot === 'promotion' && story.content.showPromotion === true) {
    return (
      <div className="lcep-promotion" style={{backgroundImage: `url(${story.content?.promotionImage.filename})`}}>
        {promotionContent}
        <a href={story.content.promotionLink.url}>
          Learn more
        </a>
      </div>
    );
  // slot not found
  } else {
    return (<div><p>Slot not configured.</p></div>)
  }
}
