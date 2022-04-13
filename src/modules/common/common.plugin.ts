import AppTest from '@/modules/common/AppTest.vue';
import PageLayoutHeader from '@/components/PageLayoutHeader.vue';
import PageLayoutSubheader from '@/components/PageLayoutSubheader.vue';
import PageLayoutLeftSidebar from '@/components/PageLayoutLeftSidebar.vue';
import News from '@/modules/news/components/News.vue';
import UploadImageButton from '@/modules/common/UploadImageButton.vue';

export default {
  // TODO: move components to object
  install: (app: any) => {
    app.component('UploadImageButton', UploadImageButton);
    // app.component('PageLayoutHeader', PageLayoutHeader);
    // app.component('PageLayoutSubheader', PageLayoutSubheader);
    // app.component('PageLayoutLeftSidebar', PageLayoutLeftSidebar);
    // app.component('NewsWall', News);
  },
};
