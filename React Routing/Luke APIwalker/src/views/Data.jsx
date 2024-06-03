import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';


const Data = ({ data, setData }) => {
  const { resource, id } = useParams();
  const [homeworld, setHomeworld] = useState(false);
  const [errors, setErrors] = useState(0);

  const getID = (url) => {
    let id = undefined;
    if (url[url.length - 3] === '/') {
      id = url.slice(url.length - 2, url.length - 1);
    } else {
      id = url.slice(url.length - 3, url.length - 1);
    }
    return id;
  };

  const getHomeworld = useCallback((incoming) => {
    axios.get(`${incoming.homeworld}`)
      .then((response) => {
        setHomeworld([response.data, getID(response.data.url)]);
      })
      .catch((error) => {});
  }, []);

  const displayHomeworld = () => {
    if (homeworld === false) {
      return "travelling at light speed";
    } else {
      return homeworld[0].name;
    }
  };

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/${resource}/${id}`)
      .then((response) => {
        setData(response.data);
        getHomeworld(response.data);
        setErrors(0);
      })
      .catch((error) => {
        if (error) {
          setErrors(1);
        }
      });
  }, [resource, id, getHomeworld, setData]);

  const water = (water) => (water > 0 ? "True" : "False");

  let link = `/planets/${homeworld[1]}`;

  if (errors === 1) {
    return (
      <>
        <h1 style={{ color: "red" }}>These aren't the droids you're looking for</h1>
        <img src="https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=768" alt="Ben Kenobi gazing into the distance" />
      </>
    );
  }

  if (resource === 'people') {
    return (
      <>
        <h1>{data.name}</h1>
        <p><strong>Height:</strong> {data.height} cm</p>
        <p><strong>Mass:</strong> {data.mass}</p>
        <p><strong>Homeworld:</strong> {<Link to={link}>{displayHomeworld()}</Link>} </p>
        <p><strong>Birth Year:</strong> {data.birth_year}</p>
      </>
    );
  } else if (resource === 'planets') {
    return (
      <>
        <h1>{data.name}</h1>
        <p><strong>Terrain:</strong> {data.terrain}</p>
        <p><strong>Climate:</strong> {data.climate}</p>
        <p><strong>Population:</strong> {data.population}</p>
        <p><strong>Surface Water:</strong> {water(data.surface_water)}</p>
        <p><strong>Gravity:</strong> {data.gravity}</p>
      </>
    );
  } else if (resource === 'starships') {
    return (
      <>
        <h1>{data.name}</h1>
        <p><strong>Class:</strong> {data.starship_class}</p>
        <p><strong>Cost:</strong> {data.cost_in_credits}</p>
        <p><strong>Max Speed:</strong> {data.max_atmosphering_speed}</p>
        <p><strong>Manufacturer:</strong> {data.manufacturer}</p>
        <p><strong>Crew:</strong> {data.crew}</p>
        <p><strong>Passengers:</strong> {data.passengers}</p>
      </>
    );
  } else if (resource === 'vehicles') {
    return (
      <>
        <h1>{data.name}</h1>
        <p><strong>Class:</strong> {data.vehicle_class}</p>
        <p><strong>Cost:</strong> {data.cost_in_credits}</p>
        <p><strong>Max Speed:</strong> {data.max_atmosphering_speed}</p>
        <p><strong>Manufacturer:</strong> {data.manufacturer}</p>
        <p><strong>Crew:</strong> {data.crew}</p>
        <p><strong>Passengers:</strong> {data.passengers}</p>
      </>
    );
  } else if (resource === 'species') {
    return (
      <>
        <h1>{data.name}</h1>
        <p><strong>Classification:</strong> {data.classification}</p>
        <p><strong>Average Height:</strong> {data.average_height}</p>
        <p><strong>Average Lifespan:</strong> {data.average_lifespan}</p>
        <p><strong>Designation:</strong> {data.designation}</p>
        <p><strong>Language:</strong> {data.language}</p>
        <p><strong>Skin Colors:</strong> {data.skin_colors}</p>
      </>
    );
  } else {
    return (
      <>
        <h1 style={{ color: "red" }}>These aren't the droids you're looking for</h1>
        <img src="https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=768" alt="Ben Kenobi gazing into the distance" />
      </>
    );
  }
};

export default Data;
