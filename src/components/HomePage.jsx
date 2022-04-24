import React from 'react';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from 'millify';

const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  console.log(data);
  console.log(globalStats);
  if (isFetching) {
    return 'Loadung ...';
  }
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats{' '}
      </Title>

      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 12h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value="5" />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
