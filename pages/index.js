import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Hello NextJS</h1>
      <nav>
        <ul>
          <li>
            {/* <a href='/about'>About</a> using standard anchor tag has a big disadvantage of sending a new HTTP request and this require a new html page and this means any component state (application context or redux-store) will be lose, and rendering all states with the default value*/}

            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/clients'>Client</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
