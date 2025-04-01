import React from "react";

import { Layout, Contacts, Project, Section, List, TwoWayLayout } from "../components";
import { Email, Github, Linkedin, Velog, Repo, Sample, VelogDashboard, AC } from "../images";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout className="my-[105px] print:my-[50px] w-[900px] flex flex-col gap-10">
      <Section>
        <h1 className="H1 leading-none">육기준</h1>
        <div className="flex flex-col gap-5">
          <h2 className="H2">
            사람들의 <span className="text-[#448F5E]">불편함</span>을 해결하기 위해 노력하는 FE
            엔지니어입니다.
          </h2>
          <p className="SPAN font-normal leading-7">
            사용자의 불편함을 해결하는 것을 핵심 가치로 두고 있습니다. <br />
            더 나은 경험을 제공하기 위해 끊임없이 고민하고 개선합니다.
            <br />
            <br />
            새로운 기술과 피드백을 열린 자세로 받아들이며, 지속적인 학습을 통해 시야를 넓힙니다.{" "}
            <br />
            또한 다른 사람들과 함께 지식을 공유하고 받아들이는 것을 선호합니다.
            <br />
            <br />
            이러한 노력과 꾸준함이 저와 동료들의 성장에 도움이 될 수 있다고 믿습니다.
          </p>
        </div>
        <Contacts
          contents={[
            { icon: <Email />, href: "mailto:dbrrl1127@gmail.com", content: "dbrrl1127@gmail.com" },
            { icon: <Github />, content: "https://www.github.com/six-standard" },
            { icon: <Velog />, content: "https://velog.io/@six-standard" },
            { icon: <Linkedin />, content: "https://www.linkedin.com/in/기준-육/" },
          ]}
        />
      </Section>
      <Section title="프로젝트">
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
            { icon: <Github />, name: "Github →", href: "https://github.com/DSM-Repo/repo" },
            {
              icon: <Sample />,
              name: "Demo →",
              href: "https://www.dsm-repo.com/resume_viewer/66dc46c0fcaf9157ccc2e3ff",
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
                  대덕소프트마이스터고등학교 학생을 위한 이력서 관리 플랫폼입니다.
                  <br />
                  학생들을 위한 간단한 이력서 작성 기능, 선생님들을 위한 피드백 및 자동 변환 기능을
                  제공하며, 변환된 레주메북은 온라인 뷰어를 통해 기업들에게 제공됩니다. <br />
                  작성 기간동안{" "}
                  <b>
                    <ins>120+</ins>
                  </b>
                  명의 학생들의 이력서를 관리하였습니다.
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
                    ["QueryClient 기반의 낙관적 업데이트를 통해 사용자 경험 향상"],
                  ]}
                />
              ),
            },
            {
              title: "트러블슈팅",
              breakAble: false,
              content: (
                <>
                  <div className="flex flex-col gap-1">
                    <h3 className="H3">미리보기 PDF 다운로드시 Javascript 동작 멈춤</h3>
                    <List
                      contents={[
                        "**원인**: PDF 노드를 canvas를 통해 이미지 형태로 변환하는 html2canvas 라이브러리의 코드가 메인 스레드의 호출 스택을 오래 점유하여 변환하는 동안 쌓인 함수들의 실행이 지연되는 문제 발생",
                        "**해결 방법**: canvas 변환 코드를 별도 스레드에서 동작하는 Web Worker로 옮기고, 메시지를 통해 blob 형태로 변환된 이미지 값을 받는 식으로 수정하여 해결.",
                        "**배운 점**: Web Worker의 개념과 동작 방식, 메인 스레드가 실제로 오래 점유될 경우에 어떤 일이 발생하는지에 대해 배울 수 있었음.",
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
                  통계 기능이 부실한 Velog를 위한 게시물 통계 대시보드 서비스입니다.
                  <br />
                  간편 통계 조회 기능을 제공하고 있으며, 추후 통계 리더보드와 비교, 타 블로그
                  서비스와의 연동을 준비할 계획입니다.
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
                    "React 기반 확장 프로그램 개발",
                    "채널톡 도입",
                    [
                      "사용자의 제보를 통한 빠른 버그, 배포 주기 문제 수집",
                      "다른 사용자가 경험하기 전 문제 해결 가능",
                    ],
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
      </Section>
      <Section title="활동 및 자격" sliceInPrint>
        <TwoWayLayout title="TOEIC 785점" date="2023. 08. 11" tabs={[{ name: "한국토익위원회" }]}>
          <p className="SPAN w-full inline-block break-words break-keep">
            외국인과 일상 수준의 대화가 가능하며, 영어 문서를 적절히 이해합니다.
          </p>
        </TwoWayLayout>
        <TwoWayLayout
          title="정보처리기능사"
          date="2023. 11. 19"
          tabs={[{ name: "한국산업인력공단" }]}
        >
          <p className="SPAN w-full inline-block break-words break-keep">
            기본적인 컴퓨터 지식을 이해하고 있으며, 병역특례시 활용할 수 있습니다.
          </p>
        </TwoWayLayout>
        <TwoWayLayout
          title="마이스터고 교내 해커톤"
          date="2024. 07. 18 ~ 2024. 07. 20"
          tabs={[{ name: "우수상(3위)" }]}
        >
          <p className="SPAN w-full inline-block break-words break-keep">
            정치에 무관심하거나, 정보가 부족한 사람들을 위한 정치 SNS 플랫폼인 YEOYA(여야) 서비스를
            제작하였습니다.
            <br />
            <br /> 디자인과 프론트엔드 개발에 일부 참여하였으며,{" "}
            <ins>
              <b>우수상(3위)</b>
            </ins>{" "}
            를 수상했습니다.
          </p>
        </TwoWayLayout>
        <TwoWayLayout
          title="1일1코테"
          date="2025. 01. 12 ~ ONGOING"
          tabs={[
            {
              icon: <Github />,

              name: "TIL →",
              action:
                "https://github.com/six-standard/Study/tree/main/Engineer%20Brain/CS/Algorithm",
            },
            {
              icon: <AC />,
              name: "Solved.ac →",
              action: "https://solved.ac/profile/dbrrlwns_2",
            },
          ]}
        >
          <p className="w-full inline-block SPAN break-words break-keep">
            꾸준함을 만들기 위해, 매일 코딩 테스트 연습 문제들을 풀고 있습니다.
            <br />
            <br />
            1월부터 꾸준히 진행하고 있으며, 새로운 자료구조나 알고리즘을 학습하면{" "}
            <a
              href="https://github.com/six-standard/Study/tree/main/Engineer%20Brain/CS/Algorithm"
              className="hover:underline text-[#9ca3af] font-bold whitespace-nowrap"
            >
              TIL에 정리
            </a>
            하였습니다.
          </p>
        </TwoWayLayout>
        <TwoWayLayout
          title="Xquare 보조 서비스 제작"
          date="2023. 09. 28 ~ 2024. 03. 12"
          tabs={[
            {
              icon: <Github />,
              name: "Github →",
              action: "https://github.com/five-standard/Xquare-Extension",
            },
            {
              icon: (
                <StaticImage
                  src="../images/Xquare.png"
                  alt="아이콘 이미지"
                  className="w-[18px] h-[18px]"
                />
              ),
              name: "Service →",
              action:
                "https://chromewebstore.google.com/detail/xquare/apjpfknndginnahobenblkdfbibckcom?hl=ko",
            },
          ]}
        >
          <p className="SPAN w-full inline-block break-words break-keep">
            (구) 교내 학교생활 관리 서비스인 Xquare를 윈도우 환경에서 사용할 방법이 없어 직접 확장
            프로그램 형태의 보조 클라이언트를 개발하였습니다.
            <br />
            실제로 처음 불편함을 해결한 경험이며, 이 때부터 프론트엔드 엔지니어링에 집중하게
            되었습니다.
            <br />
            <br />
            현재는 서비스 종료되어 사용할 수 없으나,{" "}
            <ins>
              <b>20+</b>
            </ins>
            명의 사용자가 있었습니다.
          </p>
        </TwoWayLayout>
      </Section>
      <Section title="기술 스택" sliceInPrint>
        <TwoWayLayout title="🟦 Typescript">
          <List
            contents={[
              "Tanstack-Query에서 Typescript를 통한 Type-Safe 서버 데이터 관리 경험이 있습니다.",
              "Mapped Type, Utility Type, Generic과 같은 특수 타입을 이해하고 있으며, 응용할 수 있습니다.",
              [
                "Generic Type을 사용하여 코드의 확장성을 높인 경험이 있습니다.",
                "Utility Type을 이용하여 인터페이스의 재활용성을 높인 경험이 있습니다.",
              ],
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
              ["리디렉션 CORS 문제 해결을 위해 커스텀 서버를 제작한 경험이 있습니다."],
            ]}
          />
        </TwoWayLayout>
        <TwoWayLayout title="🐙 Git & GitHub">
          <List
            contents={[
              "Branch, Merge, Rebase 등의 Git 개념을 이해하고 있습니다.",
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
