import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAllServices } from '../redux/service/service.action';
import { selectAllServices } from '../redux/service/service.selector';
import { selectUser } from '../redux/user/user.selector';
import { addBonus, getActivateBonusForUser } from '../services/bonus';
import { getAllServices } from '../services/service';
import Service from './Service';
import './ServiceList.css';

const ServiceList = () => {
  const [bonusActivated, setBonusActivated] = useState([]);
  const services = useSelector(selectAllServices);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const getServices = async () => {
    const res = await getAllServices();
    dispatch(setAllServices(res));
  };

  const getAllBonusForUser = async () => {
    const res = await getActivateBonusForUser();
    setBonusActivated(res);
  };

  const handleActiveBonusClick = async serviceId => {
    await addBonus({ userId: user.id, serviceId });
    getAllBonusForUser();
  };

  useEffect(() => {
    getServices();
    getAllBonusForUser();
  }, []);

  const renderServices = () => {
    return services.map(service => {
      const isBonusActivated = bonusActivated.some(
        b => b.serviceId === service.id,
      );
      return (
        <Service
          key={`${service.name}-${service.promo_code}`}
          service={service}
          handleActiveBonusClick={handleActiveBonusClick}
          isBonusActivated={isBonusActivated}
        />
      );
    });
  };

  return <div className='service-list-container'>{renderServices()}</div>;
};

export default ServiceList;
