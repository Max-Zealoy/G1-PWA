export default withContext('global', { ready: false }, App);

function App() {

  const g = useNamedContext('global');

  useEffect(async () => {
    // Check if the user is logged in
    g.user = (await Login.check()).js;
    g.user.email || (g.user = null);
    g.ready = true;
    // Start SSE/updateHandler
    updateHandler(g);
  }, []);

  
 
  return <SFC



  

    template=
    {!g.ready ? null : <Router>
      <main>
        <If c={g.user}>
        <Navbar/>
        <SimpleButton/>

          <Routes />
          <Else>
            <LoginForm />
          </Else>
        </If>
      </main>
    </Router>
    
  }

  />;


}