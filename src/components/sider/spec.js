import  AvatarSection from 'components/sider/avatar';
import {findByTestAttr, setUpComponent} from 'lib/spec-utils';

/* mocking the initial state of the store */
const initialState = {
    authentication:{
        credentials:{
            expired: false,
            expireTime: new Date(),
            accessKeyId: 'mock accessKeyId',
            sessionToken: 'mock sessionToken',
            params: {mock: 'params'},
            data: {mock: 'data'}
        }
    }
};

describe('Avatar Component', () => {

    let component;
    beforeEach(() => {
        component = setUpComponent(AvatarSection, initialState);
        //console.log(component.debug());
    });

    it('It should render a avatar component', ()=>{
        const wrapper = findByTestAttr(component, 'avatar');
        expect(wrapper.length).toBe(1);
    });

    it('It should render a input field', ()=>{
        const wrapper = findByTestAttr(component, 'upload-input');
        expect(wrapper.length).toBe(1);
    });

    it('It should render a popconfirm component', ()=>{
        const wrapper = findByTestAttr(component, 'popup-confirm');
        expect(wrapper.length).toBe(1);
    });
    
});