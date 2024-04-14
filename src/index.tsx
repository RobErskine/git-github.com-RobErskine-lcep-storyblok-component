import * as React from 'react';

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
      promotionContent: any;
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
      topSlot: any;
      component: string;
      bottomSlot: any;
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

function renderRichText(richText: any) {
  let html = '';

  if (!richText) {
      return html;
  }

  richText.content.forEach((item: any) => {
      if (item.type === 'heading') {
          const level = item.attrs?.level;
          const contentText = item.content?.[0]?.text;
          if (level && contentText) {
              html += `<h${level}>${contentText}</h${level}>`;
          }
      } else if (item.type === 'paragraph') {
          if (item.content) {
              html += '<p>';
              item.content.forEach((contentItem: any) => {
                  let text = contentItem.text;
                  if (contentItem.marks) {
                      contentItem.marks.forEach((mark: any) => {
                          if (mark.type === 'bold') {
                              text = `<b>${text}</b>`;
                          }
                          // Add other mark types if needed (italic, underline, etc.)
                      });
                  }
                  html += text;
              });
              html += '</p>';
          }
      } else {
          console.log('Unknown type: ', item.type);
      }
  });

  return html;
}
export default ({ slot = 'top', story }: SBProps): React.ReactElement => {
  if (!story) {
    return <div><span>Loading...</span></div>;
  }

  const styles = `
    .lcep-video {
      display: block;
      width: 100%;
      max-width: 960px;
      margin:0 auto;
      padding:2rem 1rem;
      position: relative;
    }

    .lcep-video video {
      height: 100%;
    }

    .lcep-promotion {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height:400px;
      max-width: 200px;
      margin: 0 auto;
      padding: 2rem 1rem;
      position: relative;
      z-index: 1;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      color: #fff;
      border-radius: 12px;
      overflow: hidden;
    }

    .lcep-promotion:after{
      display: block;
      z-index: 2;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background-color: rgba(0,0,0,0.5);
    }

    .lcep-promotion a,
    .lcep-promotion span {
      position: relative;
      z-index: 3;
      display: block;
      width: 100%;
      padding: 15px;
    }

    .lcep-promotion span {
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.33);
    }

    .lcep-promotion a {
      background-color: #fff;
      color: #000;
      text-align: center;
      text-decoration: none;
      border-radius: 12px;
      margin-top: 1rem;
      padding: 1rem;
    }
  `;

  // top slot
  if (slot === 'top') {
    return (
      <div>
        <style>{styles}</style>
        <div dangerouslySetInnerHTML={{ __html: renderRichText(story.content.topSlot)}}></div>
      </div>
    ) 
  }
  // bottom slot
  else if (slot === 'bottom') {
    return (
      <div>
        <style>{styles}</style>
        <div dangerouslySetInnerHTML={{ __html: renderRichText(story.content.bottomSlot)}}></div>
      </div>
    )
  }
  // video slot
  else if (slot === 'video') {
    return (
      <div className="lcep-video">
        <style>{styles}</style>
        <video controls>
          <source src={story.content.productVideos[0].filename} type="video/mp4" />
        </video>
      </div>
    )
  }
  // promotion slot
  else if (slot === 'promotion' && story.content.showPromotion === true) {
    return (
      <div className="lcep-promotion" style={{backgroundImage: `url(${story.content?.promotionImage.filename})`}}>
        <style>{styles}</style>
        <span dangerouslySetInnerHTML={{ __html: renderRichText(story.content.promotionContent) }}></span>
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
