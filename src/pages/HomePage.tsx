import { Title } from '../components/common/Title';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { t } from '../messages/messages';

export const HomePage = () => {
  return (
    <DefaultLayout>
      <Title title={t.homePage.title} />
    </DefaultLayout>
  );
};
