import GitImage from "../../assets/img/layouts/GitIcon.svg";
import LinkedInImage from "../../assets/img/layouts/LinkedinIcon.svg";
import GmailImage from "../../assets/img/layouts/GmailIcon.svg";
import WhatsappImage from "../../assets/img/layouts/WhatsappIcon.svg";
import { useParams } from "react-router-dom";
import { portfRequest } from "../../requests/portfRequest";

export interface IPortifolioInfos {
  userId: number;
  adress: {
    city: string;
    country: string;
    zipCode: string;
    street: string;
  };
  user_profile: {
    name: string;
    age: string;
    gender: string;
    birthDate: string;
    email: string;
    telephone: string;
    github_url: string;
    linkedin_url: string;
    aboutYou: string;
    training: string;
    skills: string;
    experience: string;
  };
  project: {
    projectImage_url: string;
    project_title: string;
    project_description: string;
    projectDeploy_url: string;
    projectRepository_url: string;
  };
  selectedLayout: string;
  id: number;
}

// interface ILayoutComponent {
//   portfolioInfos: IPortifolioInfos;
// }

export const LayoutComponent: any = async () => {
  let { portfId } = useParams();

  const portfolioInfos = await portfRequest(Number(portfId));

  const { adress, user_profile, project, selectedLayout } = portfolioInfos;

  const children = () => {
    return (
      <>
        <header className="layout-header">
          {/* <figure>
                    <img src={`${user_profile.}`} alt="" />
                </figure> */}
          <div className="header-user-infos">
            <h1>{user_profile.name}</h1>
            <p>{`${user_profile.birthDate} - ${user_profile.age} anos de idade`}</p>
          </div>
          <div className="header-user-links">
            <a href={user_profile.github_url}>
              <img src={GitImage} alt="GitHub icon" />
              <p>GitHub Link</p>
            </a>
            <a href={user_profile.linkedin_url}>
              <img src={LinkedInImage} alt="LinkedIn icon" />
              <p>LinkedIn Link</p>
            </a>
            <a href={`mailto:${user_profile.email}`}>
              <img src={GmailImage} alt="Gmail icon" />
              <p>{user_profile.email}</p>
            </a>
            <a href={`tel:${user_profile.telephone}`}>
              <img src={WhatsappImage} alt="Whatsapp icon" />
              <p>{user_profile.telephone}</p>
            </a>
          </div>
          <div className="header-user-adress">
            <p>{`${adress.country}`}</p>
            <p>{`${adress.city} / ${adress.street}`}</p>
            <p>{`${adress.zipCode}`}</p>
          </div>
        </header>
        <main className="layout-body">
          <div className="user-abilities">
            <h2>Abilities</h2>
            <p>{`${user_profile.skills}`}</p>
          </div>
          <div className="user-about-me">
            <h2>About me</h2>
            <p>{`${user_profile.aboutYou}`}</p>
          </div>
          <div className="user-experience">
            <h2>Experience</h2>
            <p>{`${user_profile.experience}`}</p>
          </div>
          <div className="user-training">
            <h2>Degree</h2>
            <p>{`${user_profile.training}`}</p>
          </div>
          <div className="user-project">
            <h2>Main project</h2>
            <figure>
              <img src={project.projectImage_url} alt="Project preview" />
            </figure>
            <div>
              <a href={project.projectDeploy_url}>Project Deploy</a>
              <a href={project.projectRepository_url}>Project Repository</a>
              <p>{project.project_description}</p>
            </div>
          </div>
        </main>
      </>
    );
  };

  const Teste1 = ({ porfolioInfos, children }: any) => {
    return <h1>teste1</h1>;
  };

  const Teste2 = ({ porfolioInfos, children }: any) => {
    return <h1>teste2</h1>;
  };

  const Teste3 = ({ porfolioInfos, children }: any) => {
    return <h1>teste3</h1>;
  };

  switch (selectedLayout) {
    case "layout1":
      return <Teste1 children={children} />;
    case "layout2":
      return <Teste2 children={children} />;
    case "layout3":
      return <Teste3 children={children} />;
  }
};
