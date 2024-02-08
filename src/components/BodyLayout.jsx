import './BodyLayout.css'
import Story from './Story';
import Feed from './Feed';

const ContentLayout = (props) => {
    return <div className="contentLayout">
        {props.children}
    </div>
};

const SideBarLayouy = (props) => {
    return <div className="sideBarLayout">
        {props.children}
    </div>
};

export default function BodyLayout(props){
    return <main>
        <ContentLayout>
            <Story></Story>
            <Feed></Feed>
        </ContentLayout>
        <SideBarLayouy>
            <div>test</div>
            <div>test</div>
            <div>test</div>
        </SideBarLayouy>
    </main>
}