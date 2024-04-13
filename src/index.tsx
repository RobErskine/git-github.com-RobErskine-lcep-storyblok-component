import * as React from 'react';
import { renderRichText, storyblokInit, apiPlugin, ISbRichtext } from "@storyblok/react";

storyblokInit({
  accessToken: "xxx", // access token not needed for this demo
  use: [apiPlugin]
});

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
        linktype: string;
        fieldtype: string;
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

  const styles = `
    /* Video Component */
    .lcep-video {
      display: block;
      width: 100%;
      max-width: 960px;
      margin:0 auto;
      padding:2rem 1rem;
      position: relative;
    }

    .lcep-video:after {
      content: '';
      display: block;
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
    }

    .lcep-video video {
      position: absolute;
      top: 0px;
      right: 0px;

      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
    }


    /* Promotion Component */
    .lcep-promotion {
      display: flex;
      align-items: center;
      justify-content: end;
      width: 100%;
      max-width: 200px;
      margin: 0 auto;
      padding: 2rem 1rem;
      position: relative;
      z-index: 1;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      color: #fff;
    }

    .lcep-promotion:after{
      display: block;
      content: '';
      z-index: 2;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background-color: rgba(0,0,0,0.5);
    }
  `;

  const topSlotContent = renderRichText(story.content.topSlot);
  const promotionContent = renderRichText(story.content.promotionContent);
  const bottomSlotContent = renderRichText(story.content.bottomSlot);

  // top slot
  if (slot === 'top') {
    return (
      <div>
        <style>{styles}</style>
        {topSlotContent}
      </div>
    ) 
  }
  // bottom slot
  else if (slot === 'bottom') {
    return (
      <div>
        <style>{styles}</style>
        {bottomSlotContent}
      </div>
    )
  }
  // video slot
  else if (slot === 'video') {
    return (
      <div className="lcep-video">
        <style>{styles}</style>
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
        <style>{styles}</style>
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
