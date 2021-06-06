import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { FixedSizeList } from 'react-window';
// import InfiniteLoader from 'react-window-infinite-loader';
import { setAllServices } from '../redux/service/service.action';
import { selectAllServices } from '../redux/service/service.selector';
import { selectUser } from '../redux/user/user.selector';
import { addBonus, getActivateBonusForUser } from '../services/bonus';
import { getAllServices } from '../services/service';
import InfiniteLoaderWrapper from './InfiniteLoaderWrapper';
import Service from './Service';
import './ServiceList.css';

const ServiceList = () => {
  const [page, setPage] = useState(1);
  const [bonusActivated, setBonusActivated] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);
  const services = useSelector(selectAllServices);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const getServices = async page => {
    const res = await getAllServices(page);
    setPage(page + 1);
    dispatch(setAllServices([...services, ...res]));
  };

  const getAllBonusForUser = async () => {
    const res = await getActivateBonusForUser();
    setBonusActivated(res);
  };

  const handleActiveBonusClick = async serviceId => {
    await addBonus({ userId: user.id, serviceId });
    getAllBonusForUser();
  };

  const loadNextPage = () => {
    setIsNextPageLoading(true);
    console.log('services :>> ', services);
    setHasNextPage(services.length < 10);
    console.log('page :>> ', page);
    getServices(page);
    setIsNextPageLoading(false);
    // this.setState({ isNextPageLoading: true }, () => {
    //   setTimeout(() => {
    //     this.setState(state => ({
    //       hasNextPage: state.items.length < 100,
    //       isNextPageLoading: false,
    //       items: [...state.items].concat(
    //         new Array(10).fill(true).map(() => ({ name: name.findName() })),
    //       ),
    //     }));
    //   }, 2500);
    // });
  };

  useEffect(() => {
    getServices(1);
    getAllBonusForUser();
  }, []);

  // const renderServices = () => {
  //   return services.map(service => {
  //     const isBonusActivated = bonusActivated.some(
  //       b => b.serviceId === service.id,
  //     );
  //     return (
  //       <Service
  //         key={`${service.name}-${service.promo_code}`}
  //         service={service}
  //         handleActiveBonusClick={handleActiveBonusClick}
  //         isBonusActivated={isBonusActivated}
  //       />
  //     );
  //   });
  // };

  // const renderListRow = virtualScrollProps => {
  //   const { index, style } = virtualScrollProps;
  //   let listItem = services[index];
  //   const isBonusActivated = bonusActivated.some(
  //     b => b.serviceId === listItem.id,
  //   );
  //   return (
  //     <div style={style}>
  //       <Service
  //         key={index}
  //         service={listItem}
  //         handleActiveBonusClick={handleActiveBonusClick}
  //         isBonusActivated={isBonusActivated}
  //       />
  //     </div>
  //   );
  // };

  // const handleIsItemLoaded = index => {
  //   console.log('index :>> ', index);
  //   return true;
  // };

  // const handleLoadMoreItems = (startIndex, stopIndex) => {
  //   console.log('startIndex :>> ', startIndex);
  //   console.log('stopIndex :>> ', stopIndex);
  //   return getServices(2);
  // };
  return (
    <InfiniteLoaderWrapper
      hasNextPage={hasNextPage}
      isNextPageLoading={isNextPageLoading}
      items={services}
      loadNextPage={loadNextPage}
      bonusActivated={bonusActivated}
      handleActiveBonusClick={handleActiveBonusClick}
    />
  );
};

export default ServiceList;
