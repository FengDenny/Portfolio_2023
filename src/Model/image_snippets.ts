import StanceLabContact from "@/assets/project_image/stancelab_contact.png";
import StanceLabServices from "@/assets/project_image/stancelab_services.png";
import TMB_myList from "@/assets/project_image/tmb_my_list.png";
import TMB_tabs from "@/assets/project_image/tmb_tabs.png";
import wfl_achievements from "@/assets/project_image/WFL_Achievements.png";
import wfl_solution from "@/assets/project_image/wfl_solution.png";




export const stanceLab_snippets: Array<{
    id: number;
    img_title: string;
    img_snippet: string;
  }> = [
    {
      id: 1,
      img_title: "Contact",
      img_snippet: StanceLabContact,
    },
    {
      id: 2,
      img_title: "Services",
      img_snippet: StanceLabServices,
    },
  ];
export const tmb_snippets: Array<{
    id: number;
    img_title: string;
    img_snippet: string;
  }> = [
    {
      id: 1,
      img_title: "My List",
      img_snippet: TMB_myList,
    },
    {
      id: 2,
      img_title: "Movie/Shows Tabs",
      img_snippet: TMB_tabs,
    },
  ];
export const wfl_snippets: Array<{
    id: number;
    img_title: string;
    img_snippet: string;
  }> = [
    {
      id: 1,
      img_title: "LC Achievements",
      img_snippet: wfl_achievements,
    },
    {
      id: 2,
      img_title: "LC Solutions",
      img_snippet: wfl_solution,
    },
  ];
