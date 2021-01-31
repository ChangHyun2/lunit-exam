import { Link } from 'react-router-dom';
import Button from '@UI/Button';
import { toCamelCase } from '@util';

export default function home() {
  return (
    <>
      <h1>{toCamelCase('home-page')}</h1>
      <Button>
        <Link to="/login">login page</Link>
      </Button>
    </>
  );
}
