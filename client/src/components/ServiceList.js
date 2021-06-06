import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAllServices } from '../redux/service/service.action';
import { selectAllServices } from '../redux/service/service.selector';
import { getAllServices } from '../services/service';
import Service from './Service';
import './ServiceList.css';

const ServiceList = () => {
  const services = useSelector(selectAllServices);
  const dispatch = useDispatch();

  const getServices = async () => {
    const res = await getAllServices();
    dispatch(setAllServices(res));
  };
  useEffect(() => {
    getServices();
  }, []);

  const renderServices = () =>
    services.map(service => (
      <Service
        key={`${service.name}-${service.promo_code}`}
        service={service}
      />
    ));
  return <div className='service-list-container'>{renderServices()}</div>;
};

export default ServiceList;
