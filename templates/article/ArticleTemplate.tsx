import { truncate } from '../../helpers/text';
import { ArticleTemplateParams } from './index';

export const ArticleTemplate = ({
  heading,
  description,
  authorAvatarUrl,
  authorName,
  meta,
}: ArticleTemplateParams) => (
  <div className="wrapper">
    <div>
      <h1>{truncate({ content: heading, length: 56 })}</h1>
      <p>{truncate({ content: description, length: 192 })}</p>
    </div>

    <div className="metaWrapper">
      <div className="authorWrapper">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={authorAvatarUrl} className="authorImage" alt="author image" />
        <span className="authorName">
          {truncate({
            content: authorName,
            length: 32,
          })}
        </span>
      </div>
      <div className="meta">{truncate({ content: meta, length: 36 })}</div>
    </div>

    <div className="line" />
  </div>
);
