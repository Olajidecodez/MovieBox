import { Grid, Header, Form, Segment, Button } from 
"semantic-ui-react";
import { useMutation } from "@tanstack/react-query";
import { mutationLogin } from "./mutation";

export const Auth = () => {
  const {data, mutate} = useMutation({
    mutationKey: ["Login"],  
    mutationFn: mutationLogin,
  }); 

  const handleLogin = async () => {
    await mutate();
    localStorage.setItem("guest_session_id", data?.guest_session_id);
  };
    return (
      <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh"}}>
         <Grid.Column style={{maxWidth: 450 }}>
            <Header as="h2" color="violet" textAlign="center">
              Welcome! Login by registering as a Guest below.
            </Header>
            <Form size="Large">
               <Segment stacked>
                <Button color="violet" size="large" fluid onClick={handleLogin}> 
                Login 
                </Button>
               </Segment>
            </Form>
          </Grid.Column>
      </Grid>
    )
};