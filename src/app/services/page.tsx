import CustomCardServices from "@/components/Cards/ServicesCardUI/Index";
import { Box, Grid } from "@mui/material";
import type { Metadata } from "next";
import PageTitle from "./components/PageTitle";
import ItemCard from "./components/Item";

export const metadata: Metadata = {
  title: "Services",
};

const HRCS_Specialties_List = [
  'Project Estimation',
  'Construction Management & Site Supervision',
  'Ground Up Construction for Residential & Commercial',
  'Renovations, Additions, Demolitions',
];

const Provide_List = [
  'Townhouses',
  'Retail Developments',
  'Custom Interiors',
  'Special Projects',
];

const Areas_We_Service_List = [
  'New Jersey',
  'New York',
  'Massachusetts',
];              
                
function Services() {
  return (
    <main>
      <Box sx={{ flexGrow: 1, padding: {xs: '5px', md: '40px 20px'} }}>
          <PageTitle />
      </Box>
                {/* <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                    <Grid item xs={4} sm={4} md={4}>
                        <ItemCard 
                          title={"HRCS Specialties"}
                          list={HRCS_Specialties_List} 
                        />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                      <ItemCard 
                        title={"What We Provide"}
                        list={HRCS_Specialties_List} 
                      />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                    <ItemCard
                      title={"Areas We Service"} 
                      list = {Areas_We_Service_List} 
                    />
                       
                    </Grid>
                </Grid>
            </Box>
            <CustomCardServices
              title={"Pre-Construction Services:"}
              description={"Highrise Construction Solutions (HRCS) believes in the importance of properly evaluating a project’s design and construction details during the project’s early design development stage to allow for our providing “value-added” input to the project design team. By participating in early pre-construction meetings, HRCS will focus on identifying best construction practices, minimizing adverse scheduling details, attaining potential cost savings and more efficiently planning for project completion. HRCS’s pre-construction services include:"}
              listArray={['Conceptual Project Cost Estimating', 'Constructability Review', 'Coordination with Design Professionals / Value Engineering', 'Systems Feasibility Studies / Material and Labor Availability and Selection Reviews', 'Scheduling and Lead Time Study', ' Site Logistics, Site Safety and Planning Analysis']}
              image_url={"assets/services/pre_construction.jpg"}
              directionImage={'row-reverse'}
            />
            <CustomCardServices 
              title={"Construction Services:"} 
              description={"Highrise Construction Solutions (HRCS) entire team of project executives, project managers, estimators and purchasing agents, supported by our office administrators and accounting group, all actively participate in the day-to-day operations of the firm’s projects. In support of HRCS’s project activities, the firm’s experienced construction principals have organized a complement of internal practices and project reporting systems to track the complex array of development activities associated with each ongoing project. Each project underway at HRCS utilizes the latest technology to enable HRCS to track and report on the following project activities: "} 
              listArray={['Bid Review and Award', 'Trade Contract Management', 'Project Scheduling', 'Document Control', 'Cost Control & Reporting', 'Change Order Management', 'Quality Control & Quality Assurance', 'Site Safety and Risk Management ', ' Project Close-out & Punch-list']}
              image_url={"/assets/services/construction.jpg"}
            /> */}
    </main>
  );
}

export default Services;
