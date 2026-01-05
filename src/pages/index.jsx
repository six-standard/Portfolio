import React from "react";

import {
  Layout,
  Contacts,
  Project,
  Section,
  List,
  TwoWayLayout,
} from "../components";
import {
  Email,
  Github,
  Linkedin,
  Velog,
  Repo,
  VelogDashboard,
} from "../images";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout className="my-[105px] print:my-[50px] w-[900px] flex flex-col gap-10">
      <Section>
        <h1 className="H1 leading-none">육기준</h1>
        <h2 className="H2">
          사람들의 <span className="text-[#448F5E]">불편함</span>을 해결하기
          위해 노력하는 FE 엔지니어입니다.
        </h2>
        <Contacts
          contents={[
            {
              icon: <Email />,
              href: "mailto:office@stdd.dev",
              content: "office@stdd.dev",
            },
            {
              icon: <Github />,
              content: "https://www.github.com/six-standard",
            },
            { icon: <Velog />, content: "https://velog.io/@six-standard" },
            {
              icon: <Linkedin />,
              content: "https://www.linkedin.com/in/기준-육/",
            },
          ]}
        />
      </Section>
      <Section title="커리어">
        <Project
          icon={
            <StaticImage
              src="../images/Doers.png"
              alt="회사 로고"
              className="w-[30px] h-[30px]"
            />
          }
          name="팀 두어스 인턴십"
          banner={
            <div className="overflow-hidden w-[638px] h-[350px] rounded-xl">
              <StaticImage src="../images/DoersBanner.webp" alt="배너 이미지" />
            </div>
          }
          date="2025. 08 ~ 2025. 11"
          links={[
            {
              icon: <Github />,
              name: "Profile →",
              href: "https://github.com/yook-gijun",
            },
            {
              icon: (
                <StaticImage
                  src="../images/ZVZO.png"
                  alt="아이콘 이미지"
                  className="w-[18px] h-[18px]"
                />
              ),
              name: "Service 1 →",
              href: "https://apps.apple.com/kr/app/zvzo-%ED%81%AC%EB%A6%AC%EC%97%90%EC%9D%B4%ED%84%B0-%EC%B5%9C%EC%A0%80%EA%B0%80/id6737026124",
            },
            {
              icon: (
                <StaticImage
                  src="../images/ZVZO.png"
                  alt="아이콘 이미지"
                  className="w-[18px] h-[18px]"
                />
              ),
              name: "Service 2 →",
              href: "https://apps.apple.com/kr/app/zvzo-for-%ED%81%AC%EB%A6%AC%EC%97%90%EC%9D%B4%ED%84%B0/id6480408708",
            },
          ]}
          sections={[
            {
              title: "개요",
              content: (
                <p className="break-words break-keep SPAN leading-7">
                  빠른 속도로 성장하고 있는 크리에이터 어필리에이트/공구 플랫폼,
                  ZVZO를 개발하는 팀 두어스에서 인턴십을 진행하였습니다.
                </p>
              ),
            },
            {
              title: "배운 점",
              content: (
                <List
                  contents={[
                    "회사를 다니며 규칙적인 생활, 집까지 과하게 일을 가져가지 않는 것이 중요하다는 점을 느꼈음 (되도록 회사에서 전부 처리하기)",
                    "AI를 단순 기능 구체화 및 구현이 아닌 반복 작업 자동화 및 코드 분석 도구로 활용하는 방법을 배웠음.",
                    "다른 팀원들과 효과적으로 소통하는 방법을 배우고, 대화 내용을 기록하여 업무 진행에 참고하는 습관을 들일 수 있었음",
                  ]}
                />
              ),
            },
            {
              title: "기여",
              content: (
                <List
                  contents={[
                    "프로덕트 스쿼드",
                    [
                      "**유저 앱의 React Native 버전을 v0.81로 마이그레이션**\nAndroid에서 요구하는 페이지 크기를 맞추고, JSI를 통한 직접적인 네이티브 통신이 가능해짐",
                      "**유저 앱 및 크리에이터 앱의 웹뷰 기반 서비스들을 React Native로 이전**\n프론트엔드 개발 서버를 켜지 않고도 앱 개발이 가능해졌고, 체감 로딩 속도가 개선됨",
                    ],
                    "매치그로스 스쿼드",
                    [
                      "**크리에이터 및 상품 정보를 크롤링하여 소구점 및 임베딩 데이터 생성 후 저장하는 n8n 워크플로우 설계 및 제작**\n웹훅을 통해 이름과 API 엔드포인트, 반환 데이터 형태를 전달받고 처리하는 방식으로 설계 (n8n의 직렬 실행 문제 해결)",
                    ],
                    "오가닉 스쿼드",
                    [
                      "**![채널톡 SDK](https://developers.channel.io/en/articles/50cceeab)를 통해 CS 관련 정보를 채팅 화면에 가져올 수 있는 스니펫 제작**\n이 과정에서 불편한 ![기존 스니펫 뷰어](https://snippet-builder.channel.io/) 대신 약 15분만에 바이브 코딩을 통해 ![커스텀 스니펫 뷰어](https://yook-gijun.github.io/)를 제작 및 배포하여 사용",
                    ],
                  ]}
                />
              ),
            },
          ]}
        />
      </Section>
      <Section title="프로젝트">
        <Project
          icon={<VelogDashboard className="w-[30px] h-[30px]" />}
          name="Velog Dashboard"
          smallTitle
          banner={
            <StaticImage
              src="../images/VDBanner.png"
              alt="배너 이미지"
              className="w-[638px] h-[350px] rounded-xl"
            />
          }
          date="2024. 11 ~ ONGOING"
          links={[
            {
              icon: <Github />,
              name: "Github →",
              href: "https://github.com/Check-Data-Out/velog-dashboard-v2-fe",
            },
            {
              icon: <Velog />,
              name: "Logs →",
              href: "https://velog.io/@six-standard/series/Velog-Dashboard-참여기",
            },
            {
              icon: <VelogDashboard className="w-[17px] h-[17px]" />,
              name: "Service →",
              href: "https://velog-dashboard.kro.kr/",
            },
          ]}
          sections={[
            {
              title: "개요",
              content: (
                <p className="break-words break-keep leading-7 SPAN">
                  통계 기능이 부실한 블로그 서비스 Velog를 위한 게시물 통계
                  대시보드 서비스입니다. <br />
                  현재 통계 및 리더보드를 제공하며, 새로고침 기능 등 여러 신규
                  기능을 계획하고 있습니다. <br />
                  <br />
                  현재{" "}
                  <ins>
                    <b>200+</b>
                  </ins>
                  명의 유저들이 서비스를 사용하고 있으며,{" "}
                  <ins>
                    <b>20000+</b>
                  </ins>
                  개의 게시물의 통계를 관리하고 있습니다.
                  <br />
                  또한, 프로젝트 초기부터 배포까지의{" "}
                  <a
                    href="https://velog.io/@six-standard/series/Velog-Dashboard-참여기"
                    className="hover:underline text-[#9ca3af] font-bold"
                  >
                    회고록
                  </a>
                  을 매주 작성하였습니다.
                </p>
              ),
            },
            {
              title: "기술 스택",
              content: (
                <List
                  contents={[
                    "**NextJS** - SEO 설정의 용이성, SSR을 통한 사용성 강화 등을 위해 선택",
                    "**Google Analytics & Sentry** - 서비스 사용량 모니터링 및 버그의 빠른 탐지를 위해 선택",
                    "**Jest** - 터미널 내부에서 돌아가는 테스트이며, NodeJS 백엔드와의 통합 테스트를 위해 선택",
                    "**MSW** - 반복된 Fetch 모킹을 줄이고, 재활용하기 용이한 모킹 API를 만들기 위해 선택",
                    "**Tanstack-Query & Fetch** - Axios보다 커스텀이 쉬우며, NextJS과의 연동을 위해 선택",
                    "**React-ChartJS-2** - 오래된 만큼 거대한 커뮤니티와 안정성의 보장을 위해 선택",
                  ]}
                />
              ),
            },
            {
              title: "기여",
              content: (
                <List
                  contents={[
                    "자동 로그인 및 정보 삽입을 지원하는 ![확장 프로그램 개발](https://github.com/Check-Data-Out/velog-dashboard-v2-extension)",
                    "Sentry 및 Google Analytics 도입",
                    [
                      "사용자의 제보를 통한 빠른 버그, 배포 주기 문제 수집",
                      "다른 사용자가 경험하기 전 문제 해결 가능",
                    ],
                  ]}
                />
              ),
            },
            {
              title: "트러블슈팅",
              content: (
                <div className="flex flex-col gap-1">
                  <h3 className="H3">
                    계정 변경 시, 새로고침하면 사라지는 이전 계정의 데이터 표시
                  </h3>
                  <List
                    contents={[
                      "**원인**: NextJS의 Full-Route Cache 외에도 클라이언트에서 동작하는 RSC Router Cache가 있는데, 해당 캐시를 제거하지 않아 새로고침시 사라지는 이전 데이터가 표시됨",
                      "**해결 방법**: NextJS의 서버 액션을 통해 revalidatePath 실행 후, redirect를 통해 로그인페이지로 이동시켜 해결",
                      "**배운 점**: NextJS의 캐시 구조에 대해 배울 수 있었으며, 공식 문서를 더 세세하게 읽어보는 계기가 되었음",
                    ]}
                  />
                </div>
              ),
            },
          ]}
        />
        <Project
          icon={<Repo className="w-[30px] h-[30px]" />}
          name="REPO"
          date="2024. 06 ~ 2025. 01"
          banner={
            <StaticImage
              src="../images/RepoBanner.png"
              alt="배너 이미지"
              className="w-[638px] h-[350px] rounded-xl"
            />
          }
          links={[
            {
              icon: <Github />,
              name: "Github →",
              href: "https://github.com/DSM-Repo/repo",
            },
            {
              icon: <Repo className="w-[17px] h-[17px]" />,
              name: "Service →",
              href: "https://www.dsm-repo.com/",
            },
          ]}
          sections={[
            {
              title: "개요",
              content: (
                <p className="break-words break-keep SPAN leading-7">
                  대덕소프트마이스터고등학교 학생을 위한 이력서 관리
                  플랫폼입니다.
                  <br />
                  자체 레이아웃 기반의 이력서 작성, 피드백, 온라인 이력서 도서관
                  기능을 제공하며, 온라인 이력서 도서관을 통해 기업에게 바로
                  이력서를 공유할 수도 있습니다.
                  <br />
                  <br />
                  작성 가능 기간동안{" "}
                  <b>
                    <ins>120+</ins>
                  </b>
                  명의 학생들이 이력서를 작성하였습니다.
                </p>
              ),
            },
            {
              title: "기술 스택",
              content: (
                <List
                  contents={[
                    "**React** - 컴포넌트 아키텍처로 유지보수성과 재사용성을 높이기 위해 선택",
                    "**Yarn Workspace** - 설정 파일 및 디자인 시스템의 손쉬운 관리를 위해 선택",
                    "**React Hook Form** - 입력 렌더링 최적화 및 유지보수의 용이성을 위해 선택",
                    "**Tanstack-Query & Axios** - 낙관적 업데이트, 콜백 관리 등을 위해 선택",
                    "**React-PDF & jsPDF** - 간편한 PDF 렌더링 및 다운로드 기능을 위해 선택",
                  ]}
                />
              ),
            },
            {
              title: "기여",
              content: (
                <List
                  contents={[
                    "작성, 미리보기를 포함한 학생 서비스 개발",
                    "React-hook-form 라이브러리 도입",
                    [
                      "useState 기반으로 Props Drilling이 발생하던 입력 코드 리팩토링 ![실제 코드 →](https://github.com/DSM-Repo/repo/commit/70c8a101f0fa661d88e089c89b6209ae580310ea#diff-80f66ab5d30e7b48bd0159c53624b334ac9c4864fb88e5d9b1738371702140f4)",
                    ],
                    "Yarn Workspaces 기반 모노레포 설계 및 구현",
                    ["Yarn Berry 기반의 중앙 node_modules 폴더 생성"],
                    "Tanstack-Query 라이브러리 도입",
                    [
                      "QueryClient 기반의 낙관적 업데이트를 통해 사용자 경험 향상",
                    ],
                  ]}
                />
              ),
            },
            {
              title: "트러블슈팅",
              content: (
                <>
                  <div className="flex flex-col gap-1">
                    <h3 className="H3">
                      미리보기 PDF 다운로드시 Javascript 동작 멈춤
                    </h3>
                    <List
                      contents={[
                        "**원인**: base64 형태의 이미지를 PDF에 추가하는 jsPDF 라이브러리의 코드가 메인 스레드의 호출 스택을 오래 점유하여 변환하는 동안 쌓인 함수들의 실행이 지연되는 문제 발생",
                        "**해결 방법**: jsPDF의 PDF 변환 코드를 스레드에서 동작하는 Web Worker로 옮기고, 메시지를 통해 blob 형태로 변환된 PDF 파일을 받는 식으로 수정하여 해결.",
                        "**배운 점**: Web Worker의 개념과 동작 방식, Blob 개념, 메인 스레드가 실제로 오래 점유될 경우에 어떤 일이 발생하는지에 대해 배울 수 있었음.",
                      ]}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="H3">특정 운영체제에서의 PDF 화질 저하</h3>
                    <List
                      contents={[
                        "**원인**: 현재 사용중인 React-PDF의 DPI 값은 72 고정인데, Windows와 Linux에서는 기본 96 DPI를 사용하기 때문에 운영체제의 DPI에 맞추기 위해 PDF가 뭉개져서 표시되는 문제 발생.",
                        "**해결 방법**: PDF Canvas의 Scale 값을 3으로 고정한 상황에서, CSS의 Transform Scale 옵션을 통해 크기를 원래대로 돌리면서 내부 픽셀을 압축하여 DPI를 강제로 올리는 방식으로 해결.",
                        "**배운 점**: 운영체제의 화면 표시 방식에 따라 페이지의 내용물이 다를 수 있다는 점과, 픽셀 압축에 대해서 배울 수 있었음.",
                      ]}
                    />
                  </div>
                </>
              ),
            },
          ]}
        />
        {/* <Project
          icon={
            <StaticImage
              src="../images/Xquare.webp"
              alt="아이콘 이미지"
              className="w-[30px] h-[30px]"
            />
          }
          name="Xquare Extension"
          date="2023. 09 ~ 2024. 03"
          banner={
            <StaticImage
              src="../images/XquareBanner.webp"
              alt="배너 이미지"
              className="w-[638px] h-[350px] rounded-xl"
            />
          }
          links={[
            {
              icon: <Github />,
              name: "Github →",
              href: "https://github.com/five-standard/Xquare-Extension",
            },
            {
              icon: (
                <StaticImage
                  src="../images/Xquare.webp"
                  alt="아이콘 이미지"
                  className="w-[18px] h-[18px]"
                />
              ),
              name: "Service →",
              href: "https://chromewebstore.google.com/detail/xquare/apjpfknndginnahobenblkdfbibckcom?hl=ko",
            },
          ]}
          sections={[
            {
              title: "개요",
              content: (
                <p className="break-words break-keep SPAN leading-7">
                  (구) 교내 학교생활 관리 서비스인 Xquare를 윈도우 환경에서
                  사용할 방법이 없어 직접 확장 프로그램 형태의 보조 클라이언트를
                  개발하였습니다.
                  <br />
                  실제로 처음 불편함을 해결한 경험이며, 이 때부터 프론트엔드
                  엔지니어링에 집중하게 되었습니다.
                  <br />
                  <br />
                  현재는 서비스 종료되어 통계 조회나 사용이 불가능하지만,
                  교내에서 여러 선생님들과 학생들이 유용하게 사용하였습니다.
                </p>
              ),
            },
          ]}
        /> */}
      </Section>
      <Section title="활동 및 자격">
        <TwoWayLayout
          title="마이스터고 교내 해커톤"
          date="2024. 07. 18 ~ 2024. 07. 20"
          tabs={[{ name: "우수상" }]}
        >
          <p className="SPAN w-full inline-block break-words break-keep">
            관련된 정보가 부족하거나 무관심한 사람들을 위한 정치 의견 공유
            플랫폼인 YEOYA(여야) 서비스를 제작하였습니다.
            <br />
            <br /> 서비스 디자인 및 프론트엔드 개발에 참여하였으며,{" "}
            <ins>
              <b>우수상</b>
            </ins>
            을 수상했습니다.
          </p>
        </TwoWayLayout>
        <TwoWayLayout
          title="정보기기운용기능사"
          date="2025. 07. 18"
          tabs={[{ name: "한국산업인력공단" }]}
        >
          <p className="SPAN w-full inline-block break-words break-keep">
            기본적인 정보기기 운용 관련 지식을 이해하고 있습니다.
          </p>
        </TwoWayLayout>
        <TwoWayLayout
          title="정보처리기능사"
          date="2023. 11. 19"
          tabs={[{ name: "한국산업인력공단" }]}
        >
          <p className="SPAN w-full inline-block break-words break-keep">
            기본적인 컴퓨터 지식을 이해하고 있으며, 병역특례시 활용할 수
            있습니다.
          </p>
        </TwoWayLayout>
        <TwoWayLayout
          title="TOEIC 785점"
          date="2023. 08. 11"
          tabs={[{ name: "한국토익위원회" }]}
        >
          <p className="SPAN w-full inline-block break-words break-keep">
            외국인과 일상 수준의 대화가 가능하며, 영어 문서를 적절히 이해합니다.
          </p>
        </TwoWayLayout>
      </Section>
      <Section title="기술 스택" sliceInPrint>
        <TwoWayLayout title="🟦 Typescript">
          <List
            contents={[
              "Tanstack-Query에서 Typescript를 통한 Type-Safe 서버 데이터 관리 경험이 있습니다.",
              "![Serializer](https://www.npmjs.com/package/typescript-json-serializer) 기반의 Response 타입 관리에 대한 경험이 있습니다",
              "Mapped Type, Utility Type, Generic과 같은 특수 타입을 이해하고 있으며, 응용할 수 있습니다.",
            ]}
          />
        </TwoWayLayout>
        <TwoWayLayout title="🖥️ ReactJS">
          <List
            contents={[
              "Zustand와 Context API를 통한 전역 상태관리를 사용할 수 있습니다.",
              "Axios, Tanstack-Query를 통해 Rest 규칙을 준수하며 API를 사용한 경험이 있습니다.",
              "React-Hook-Form, Zod를 통해 안정적인 유효성 검증 시스템을 구현한 경험이 있습니다.",
            ]}
          />
        </TwoWayLayout>
        <TwoWayLayout title="💻 NextJS">
          <List
            contents={[
              "Hydration 및 Tanstack-query를 통해 Prefetch를 제공하는 SSR 환경을 구축한 경험이 있습니다.",
              "Middleware, Page/App router 등 NextJS 고유의 기능들을 이해하고 있습니다.",
              [
                "리디렉션 CORS 문제 해결을 위해 커스텀 서버를 제작한 경험이 있습니다.",
              ],
            ]}
          />
        </TwoWayLayout>
        <TwoWayLayout title="📱 React Native">
          <List
            contents={[
              "React Native CLI 및 Expo를 활용한 개발/빌드/배포 경험이 있습니다.",
              "React Native의 버전을 마이그레이션해 본 경험이 있습니다",
              "Codepush, Radon IDE, Android Studio 및 Xcode 등 다양한 도구의 사용법을 이해하고 있습니다",
            ]}
          />
        </TwoWayLayout>
        <TwoWayLayout title="🐙 Git & GitHub">
          <List
            contents={[
              "Branch, Merge, Rebase, Stash 등의 Git 개념을 이해하고 있습니다.",
              "Pull Request를 통해 코드 리뷰를 받고, 진행한 경험이 있습니다. ![실제 경험 →](https://github.com/Check-Data-Out/velog-dashboard-v2-fe/pull/25)",
              "Git Flow와 GIthub Flow의 차이점과 사용 방법을 이해하고 있습니다. ![학습 블로그 →](https://velog.io/@six-standard/브랜치-구조-깔끔하게-관리하기-플로우)",
            ]}
          />
        </TwoWayLayout>
        <TwoWayLayout title="🍿 Other Stacks">
          <List
            contents={[
              "**MonoRepo**",
              [
                "모노레포와 멀티레포의 차이점을 이해하고 있습니다.",
                "Yarn Workspaces 기반 모노레포 환경에서의 개발 경험이 있습니다.",
              ],
            ]}
          />
        </TwoWayLayout>
      </Section>
    </Layout>
  );
};

export const Head = () => <title>육기준</title>;

export default IndexPage;
