import React, { useState, useRef, useEffect } from 'react';
import './index.css';

const data = []
for (let i = 0;i< 1000; i++ ){
  data.push({
    key: i.toString(),
    val: 'Item' + i,
  })
}


export const News = ({itemSize,  }) => {
  const [data, setData] = useState([]);
  const [transform, setTransform] = useState('');
  const virtualList = useRef();
  const totalH = data.length * itemSize + 'px';
  const totalHeight = totalH;

  useEffect(() => {
    this.updateViewContent();
  }, [])

  const handleScroll = e => {
    /*
     * 获取scrollTop
     * 此属性可以获取或者设置对象的最顶部到对象在当前窗口显示的范围内的顶边的距离
     * 也就是元素滚动条被向下拉动的距离
     * */
    updateViewContent(e.target.scrollTop);
  };

  const updateViewContent = (scrollTop = 0) => {
    // 计算可视区域里能放几个元素
    const viewCount = Math.ceil(this.virtualList.current.clientHeight/itemSize);
    // 计算可视区域开始的索引
    const start = Math.floor(scrollTop/itemSize);
    // 计算可视区域结束索引
    const end = start + viewCount;
    // 截取可视区域数据
    const viewData = data.slice(start,end);
    setTransform(`translate3d(0, ${ start * itemSize }px, 0)`);
    setData(viewData);
  };

    return (
      <div className="virtual-list" onScroll={handleScroll} ref={virtualList}>
        <div className="virtual-list-height" style={{height: totalHeight}} />
        <div className="view-content" style={{transform: transform}}>
          {
            data.map(({key, val}) => (
              <div className="view-item" key={key}>{val}</div>
            ))
          }
        </div>
      </div>
    )
}
