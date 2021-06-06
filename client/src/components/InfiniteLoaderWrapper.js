import React from 'react';
import { FixedSizeList } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import Service from './Service';

export default function InfiniteLoaderWrapper({
  // Are there more items to load?
  // (This information comes from the most recent API request.)
  hasNextPage,

  // Are we currently loading a page of items?
  // (This may be an in-flight flag in your Redux store for example.)
  isNextPageLoading,

  // Array of items loaded so far.
  items,

  // Callback function responsible for loading the next page of items.
  loadNextPage,
  bonusActivated,
  handleActiveBonusClick,
}) {
  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const itemCount = hasNextPage ? items.length + 1 : items.length;

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = index => !hasNextPage || index < items.length;

  // Render an item or a loading indicator.
  //   const Item = ({ index, style }) => {
  //     let content;
  //     if (!isItemLoaded(index)) {
  //       content = 'Loading...';
  //     } else {
  //       content = items[index].name;
  //     }

  //     return <div style={style}>{content}</div>;
  //   };

  const renderListRow = virtualScrollProps => {
    const { index, style } = virtualScrollProps;
    if (!isItemLoaded(index)) {
      content = 'Loading...';
    } else {
      let listItem = items[index];
      const isBonusActivated = bonusActivated.some(
        b => b.serviceId === listItem.id,
      );
      return (
        <div style={style}>
          <Service
            key={index}
            service={listItem}
            handleActiveBonusClick={handleActiveBonusClick}
            isBonusActivated={isBonusActivated}
          />
        </div>
      );
    }
  };

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => (
        <FixedSizeList
          height={450}
          itemSize={180}
          itemCount={items.length}
          className='service-list-container'
          ref={ref}
          onItemsRendered={onItemsRendered}
        >
          {virtualScrollProps => {
            return renderListRow(virtualScrollProps);
          }}
        </FixedSizeList>
      )}
    </InfiniteLoader>
  );
}
