import { truncate } from '../../helpers/text';
import { BasicTemplateParams } from './index';

export const BasicTemplate = ({
  heading,
  description,
  badge,
}: BasicTemplateParams) => (
  <div className="wrapper">
    <div className="badge">{truncate({ content: badge, length: 32 })}</div>
    <h1>{truncate({ content: heading, length: 56 })}</h1>
    <p>{truncate({ content: description, length: 192 })}</p>

    <div className="line" />
  </div>
);
