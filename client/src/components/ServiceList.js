import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAllServices } from '../redux/service/service.action';
import { selectAllServices } from '../redux/service/service.selector';
import { selectUser } from '../redux/user/user.selector';
import { addBonus, getActivateBonusForUser } from '../services/bonus';
import { getAllServices } from '../services/service';
import InfiniteLoaderWrapper from './InfiniteLoaderWrapper';
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
    setHasNextPage(services.length < 10);
    getServices(page);
    setIsNextPageLoading(false);
  };

  useEffect(() => {
    getServices(1);
    getAllBonusForUser();
  }, []);

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
