import {Dimmer, Loader} from 'semantic-ui-react';
import {
  Container,
  List,
  Button,
  Grid,
  Segment,
  Header,
} from 'semantic-ui-react';
import {useSelector, useDispatch} from 'react-redux';
import ListItem from '../components/listItem';
import {fetchGistFile} from '../async/fetchGistFile';
import CodeEmptyBlock from '../components/codeEmptyBlock';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import FileContent from './fileContent';
import {
  getGistFileSelector,
} from '../redux/reducers/selectors/gistfileSelector';

export default function FilesPage () {
  const {path, url} = useRouteMatch ();
  const {isLoading, isDisabledBtn} = useSelector (state => state.files);
  const dispatch = useDispatch ();
  const filesInfo = useSelector (getGistFileSelector);
  console.log (isLoading);

  return (
    <Container>
      <Header
        style={{
          color: 'white',
          fontSize: 40,
          textAlign: 'center',
          marginTop: 50,
          marginBottom: 30,
        }}
      >
        GIST Explorer
      </Header>
      <Grid columns={2}>
        <Grid.Column>
          <Segment raised>
            <Header style={{textAlign: 'center'}}>File list</Header>
            <List selection verticalAlign="middle">
              <Dimmer active={isLoading}>
                <Loader />
              </Dimmer>
              {filesInfo.map (file => {
                return <ListItem key={file.fileId} file={file} url={url} />;
              })}
            </List>
            <Button
              primary
              onClick={() => dispatch (fetchGistFile ())}
              disabled={isDisabledBtn}
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Show List
            </Button>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Switch>
            <Route exact path={`${path}`}>
              <CodeEmptyBlock />
            </Route>
            <Route path={`${path}/file:fileId`}>
              <FileContent filesArray={filesInfo} url={url} />
            </Route>
          </Switch>
        </Grid.Column>
      </Grid>
    </Container>
  );
}
