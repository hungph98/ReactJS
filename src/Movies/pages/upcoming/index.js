import React, {useState} from 'react';
import { Row, Col, DatePicker } from 'antd';
import MasterLayoutMovie from '../../Components/master-layout';
import { api } from '../../services/api';
import ListMovie from '../../Components/listmovie';
import PaginationMovie from '../../Components/pagigation';
import { helper } from '../../helpers/common';

const { RangePicker } = DatePicker;

const ComingMovie = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [comingMovie, setComingMovie] = useState({});
  const [totalPage, setTotalPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [fDate, setFromData] = useState('');
  const [tDate,setToDate] = useState('');


  const chooseTime = async(t1, t2, p = 1) =>{
    setLoading(true);
    setPage(p);
    let fromDate = t2[0];
    let toDate = t2[1];
    let data = await api.getDataComingMovie(fromDate, toDate, page);
    if(data.hasOwnProperty('results')){
      setFromData(fromDate);
      setToDate(toDate);
      setComingMovie(data.results);
      setTotalPage(data.total_pages);
      setTotalItems(data.total_results);
    }
    setLoading(false);
  }
  return (
    <MasterLayoutMovie>
      <Row>
        <Col span={24}>
          <RangePicker onChange={(d1,d2) => chooseTime(d1,d2)}/>
        </Col>
      </Row>
      {
        !loading 
        && 
        !helper.isEmptyObject(comingMovie)
        &&
        <ListMovie
          loading={loading}
          movies={comingMovie}
        />
      }
      {
        !loading
        &&
        !helper.isEmptyObject(comingMovie)
        &&
        <PaginationMovie
          defaultCurrent={page}
          total={totalItems}
          totalPage={totalPage}
          fDate={fDate}
          tDate={tDate}
          change={chooseTime}
        />
      }
    </MasterLayoutMovie>
  )
}
export default React.memo(ComingMovie);