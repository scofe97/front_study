import styled from '@emotion/styled';
import {Link, useLocation} from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/react';

const BreadCrumbLayout = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
`;

export const BreadcrumbComponent = () => {
    const location = useLocation();
    const path = location.pathname.split('/');
    path.splice(0, 1);
    const pathSlice = path.map((_, idx) => {
        return path.slice(0, idx + 1).join('.');
    });
    return (
        <BreadCrumbLayout>
            <div>
                <Breadcrumb separator="〉">
                    {pathSlice.map((p, idx) => (
                        <BreadcrumbItem key={idx}>
                            <BreadcrumbLink
                                fontSize={'.9rem'}
                                as={Link}
                                to={`/${p.replace('.', '/')}`}
                            >
                                {idx === 0
                                    ? `menu.${p}.${p}`
                                    : idx === pathSlice.length
                                        ? `menu.${p}`
                                        : `menu.${p}`}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    ))}
                </Breadcrumb>
            </div>
        </BreadCrumbLayout>
    );
};
