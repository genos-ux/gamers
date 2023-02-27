import Carousel from 'react-bootstrap/Carousel';


function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/close-up-yellow-white-pool-ball_1203-1739.jpg?size=626&ext=jpg&ga=GA1.2.718236374.1677044455&semt=ais"
          alt="First slide"
          width="" 
          height="360vh"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/realistic-chess-game-pieces-3d-icons-set-with-reflection_1284-13710.jpg?size=626&ext=jpg&ga=GA1.2.718236374.1677044455&semt=ais"
          alt="Second slide"
          width="" 
          height="360vh"
        />
        
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/realistic-table-tennis-background_23-2148655433.jpg?size=626&ext=jpg&ga=GA1.1.718236374.1677044455&semt=ais"
          alt="Third slide"
          width="" 
          height="360vh"
        />
        
        {/* <Carousel.Caption>
          Low Commisions
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/activity-control-cable-relaxation-station_1172-483.jpg?size=626&ext=jpg&ga=GA1.1.718236374.1677044455&semt=ais"
          alt="Fourth slide"
          width="" 
          height="360vh"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      

    </Carousel>
  );
}

export default IndividualIntervalsExample;