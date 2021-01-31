import { Link } from 'react-router-dom';
import Button from '@UI/Button';

export default function login() {
  return (
    <>
      <h1>login page</h1>
      <Button>
        <Link to="/">home page</Link>
      </Button>
    </>
  );
}
