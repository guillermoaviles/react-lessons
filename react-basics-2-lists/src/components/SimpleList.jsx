
const numbersList = [
    <li key={1}>1</li>, 
    <li key={2}>2</li>, 
    <li key={3}>3</li>, 
    <li key={4}>4</li>
];

function SimpleList() {
    return (
        <div className="list">
          <h2>Simple List</h2>
     
          {numbersList}
        </div>
      );
}

export default SimpleList;