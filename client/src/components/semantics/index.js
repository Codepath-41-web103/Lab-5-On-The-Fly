import { lazy } from 'react';
const Nav = lazy(() => import('./Nav'));
const Footer = lazy(() => import('./Footer'));
const Header = lazy(() => import('./Header'));
const Main = lazy(() => import('./Main'));
const Section = lazy(() => import('./Section'));
const Article = lazy(() => import('./Article'));
const Menu = lazy(() => import('./Menu'));
const Picture = lazy(() => import('./Picture'));
const Details = lazy(() => import('./Details'));
const Form = lazy(() => import('./Form'));
const Input = lazy(() => import('./Input'));
const Button = lazy(() => import('./Button'));


export { Nav, Footer, Header, Main, Section, Article, Menu, Picture, Details, Form, Input, Button };