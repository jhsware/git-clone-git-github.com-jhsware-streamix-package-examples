import { globalRegistry, Utility } from 'component-registry';
import { componentDidAppear, componentWillDisappear } from 'inferno-animation';
import { IGraphicsEffectUtil } from 'streamix-interfaces';
import * as config from './streamix_package.json';
import './component.scss';

function NameTag({value, animation}) {
  return (
    <div className="NameTag">
      <div className="inner">
        <span className="name">{value['name']}</span>
        <span className="title">{value['title']}</span>
      </div>
    </div>
  )
}

@globalRegistry.register
export default class GraphicsEffectUtil extends Utility<IGraphicsEffectUtil> {
  static __implements__ = IGraphicsEffectUtil;
  static __name__ = config.name;

  static __Component__({id, name, isStaged, data}) {
    return <div className="name-tag">
      {isStaged && <NameTag
        value={data}
        onComponentDidAppear={componentDidAppear}
        onComponentWillDisappear={componentWillDisappear}
        animation="NameTag" />}
    </div>
  }
}
