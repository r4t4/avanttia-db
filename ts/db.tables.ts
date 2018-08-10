// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  account_statement_notifications:def.account_statement_notificationsModel;
  accounts:def.accountsModel;
  banks:def.banksModel;
  comercial_activities:def.comercial_activitiesModel;
  companies:def.companiesModel;
  banxico_exchange_rate:def.banxico_exchange_rateModel;
  collection_policies:def.collection_policiesModel;
  company_payments:def.company_paymentsModel;
  company_site:def.company_siteModel;
  company_intercom_data:def.company_intercom_dataModel;
  contact_phone:def.contact_phoneModel;
  contacts:def.contactsModel;
  contact_email:def.contact_emailModel;
  company_user:def.company_userModel;
  contracts:def.contractsModel;
  credit_days:def.credit_daysModel;
  contpaqi_license_config_log:def.contpaqi_license_config_logModel;
  credit_report_accounts:def.credit_report_accountsModel;
  credit_notes:def.credit_notesModel;
  credit_payments:def.credit_paymentsModel;
  credit_report_credits:def.credit_report_creditsModel;
  credit_report_addresses:def.credit_report_addressesModel;
  credit_report_companies:def.credit_report_companiesModel;
  credit_report_endorses:def.credit_report_endorsesModel;
  credit_report_morals:def.credit_report_moralsModel;
  credit_report_customers:def.credit_report_customersModel;
  credit_report_employments:def.credit_report_employmentsModel;
  credit_reports:def.credit_reportsModel;
  cuenta_clabe_control:def.cuenta_clabe_controlModel;
  credit_report_shareholders:def.credit_report_shareholdersModel;
  customers:def.customersModel;
  customers_pending_balance:def.customers_pending_balanceModel;
  currencies:def.currenciesModel;
  customer_invites:def.customer_invitesModel;
  customers_without_logbook:def.customers_without_logbookModel;
  discounts:def.discountsModel;
  customers_unassigned:def.customers_unassignedModel;
  distributors:def.distributorsModel;
  economic_sectors:def.economic_sectorsModel;
  dispersion_orders:def.dispersion_ordersModel;
  distributor_levels:def.distributor_levelsModel;
  extensions:def.extensionsModel;
  failed_jobs:def.failed_jobsModel;
  erps:def.erpsModel;
  history_invoices:def.history_invoicesModel;
  import_data_service_logs:def.import_data_service_logsModel;
  historial_deuda_comentarios:def.historial_deuda_comentariosModel;
  history_assignments:def.history_assignmentsModel;
  incidences:def.incidencesModel;
  invoice_json:def.invoice_jsonModel;
  incidence_reasons:def.incidence_reasonsModel;
  licences:def.licencesModel;
  jobs:def.jobsModel;
  licence_renewals:def.licence_renewalsModel;
  licenses_feraz:def.licenses_ferazModel;
  logbook:def.logbookModel;
  license_payments:def.license_paymentsModel;
  licenses_contpaqi:def.licenses_contpaqiModel;
  migrations:def.migrationsModel;
  notification_rules:def.notification_rulesModel;
  notification_templates:def.notification_templatesModel;
  logbook_payment:def.logbook_paymentModel;
  notifications_config:def.notifications_configModel;
  notifications_customers:def.notifications_customersModel;
  notifications:def.notificationsModel;
  oauth_access_tokens:def.oauth_access_tokensModel;
  oauth_auth_codes:def.oauth_auth_codesModel;
  notifications_sms:def.notifications_smsModel;
  notifications_templates:def.notifications_templatesModel;
  oauth_personal_access_clients:def.oauth_personal_access_clientsModel;
  oauth_refresh_tokens:def.oauth_refresh_tokensModel;
  password_resets:def.password_resetsModel;
  oauth_clients:def.oauth_clientsModel;
  payment_concepts:def.payment_conceptsModel;
  payment_formats:def.payment_formatsModel;
  payment_methods:def.payment_methodsModel;
  pay_days:def.pay_daysModel;
  payment_promise:def.payment_promiseModel;
  payment_promise_receivables:def.payment_promise_receivablesModel;
  payment_request_receivable:def.payment_request_receivableModel;
  payment_periods:def.payment_periodsModel;
  payments_receivable:def.payments_receivableModel;
  payments_request:def.payments_requestModel;
  periods:def.periodsModel;
  payments:def.paymentsModel;
  permissions:def.permissionsModel;
  plans:def.plansModel;
  promises_payment:def.promises_paymentModel;
  receivables:def.receivablesModel;
  permission_role:def.permission_roleModel;
  receivables_notifications:def.receivables_notificationsModel;
  recovery_goals:def.recovery_goalsModel;
  role_user:def.role_userModel;
  roles:def.rolesModel;
  sync_log:def.sync_logModel;
  transactions:def.transactionsModel;
  transactions_files:def.transactions_filesModel;
  sites:def.sitesModel;
  user_sync_log:def.user_sync_logModel;
  user_sync_log_payments:def.user_sync_log_paymentsModel;
  user_notifications:def.user_notificationsModel;
  users:def.usersModel;
  webservices_log:def.webservices_logModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    account_statement_notifications: seq.import(path.join(__dirname, './account_statement_notifications')),
    accounts: seq.import(path.join(__dirname, './accounts')),
    banks: seq.import(path.join(__dirname, './banks')),
    comercial_activities: seq.import(path.join(__dirname, './comercial_activities')),
    companies: seq.import(path.join(__dirname, './companies')),
    banxico_exchange_rate: seq.import(path.join(__dirname, './banxico_exchange_rate')),
    collection_policies: seq.import(path.join(__dirname, './collection_policies')),
    company_payments: seq.import(path.join(__dirname, './company_payments')),
    company_site: seq.import(path.join(__dirname, './company_site')),
    company_intercom_data: seq.import(path.join(__dirname, './company_intercom_data')),
    contact_phone: seq.import(path.join(__dirname, './contact_phone')),
    contacts: seq.import(path.join(__dirname, './contacts')),
    contact_email: seq.import(path.join(__dirname, './contact_email')),
    company_user: seq.import(path.join(__dirname, './company_user')),
    contracts: seq.import(path.join(__dirname, './contracts')),
    credit_days: seq.import(path.join(__dirname, './credit_days')),
    contpaqi_license_config_log: seq.import(path.join(__dirname, './contpaqi_license_config_log')),
    credit_report_accounts: seq.import(path.join(__dirname, './credit_report_accounts')),
    credit_notes: seq.import(path.join(__dirname, './credit_notes')),
    credit_payments: seq.import(path.join(__dirname, './credit_payments')),
    credit_report_credits: seq.import(path.join(__dirname, './credit_report_credits')),
    credit_report_addresses: seq.import(path.join(__dirname, './credit_report_addresses')),
    credit_report_companies: seq.import(path.join(__dirname, './credit_report_companies')),
    credit_report_endorses: seq.import(path.join(__dirname, './credit_report_endorses')),
    credit_report_morals: seq.import(path.join(__dirname, './credit_report_morals')),
    credit_report_customers: seq.import(path.join(__dirname, './credit_report_customers')),
    credit_report_employments: seq.import(path.join(__dirname, './credit_report_employments')),
    credit_reports: seq.import(path.join(__dirname, './credit_reports')),
    cuenta_clabe_control: seq.import(path.join(__dirname, './cuenta_clabe_control')),
    credit_report_shareholders: seq.import(path.join(__dirname, './credit_report_shareholders')),
    customers: seq.import(path.join(__dirname, './customers')),
    customers_pending_balance: seq.import(path.join(__dirname, './customers_pending_balance')),
    currencies: seq.import(path.join(__dirname, './currencies')),
    customer_invites: seq.import(path.join(__dirname, './customer_invites')),
    customers_without_logbook: seq.import(path.join(__dirname, './customers_without_logbook')),
    discounts: seq.import(path.join(__dirname, './discounts')),
    customers_unassigned: seq.import(path.join(__dirname, './customers_unassigned')),
    distributors: seq.import(path.join(__dirname, './distributors')),
    economic_sectors: seq.import(path.join(__dirname, './economic_sectors')),
    dispersion_orders: seq.import(path.join(__dirname, './dispersion_orders')),
    distributor_levels: seq.import(path.join(__dirname, './distributor_levels')),
    extensions: seq.import(path.join(__dirname, './extensions')),
    failed_jobs: seq.import(path.join(__dirname, './failed_jobs')),
    erps: seq.import(path.join(__dirname, './erps')),
    history_invoices: seq.import(path.join(__dirname, './history_invoices')),
    import_data_service_logs: seq.import(path.join(__dirname, './import_data_service_logs')),
    historial_deuda_comentarios: seq.import(path.join(__dirname, './historial_deuda_comentarios')),
    history_assignments: seq.import(path.join(__dirname, './history_assignments')),
    incidences: seq.import(path.join(__dirname, './incidences')),
    invoice_json: seq.import(path.join(__dirname, './invoice_json')),
    incidence_reasons: seq.import(path.join(__dirname, './incidence_reasons')),
    licences: seq.import(path.join(__dirname, './licences')),
    jobs: seq.import(path.join(__dirname, './jobs')),
    licence_renewals: seq.import(path.join(__dirname, './licence_renewals')),
    licenses_feraz: seq.import(path.join(__dirname, './licenses_feraz')),
    logbook: seq.import(path.join(__dirname, './logbook')),
    license_payments: seq.import(path.join(__dirname, './license_payments')),
    licenses_contpaqi: seq.import(path.join(__dirname, './licenses_contpaqi')),
    migrations: seq.import(path.join(__dirname, './migrations')),
    notification_rules: seq.import(path.join(__dirname, './notification_rules')),
    notification_templates: seq.import(path.join(__dirname, './notification_templates')),
    logbook_payment: seq.import(path.join(__dirname, './logbook_payment')),
    notifications_config: seq.import(path.join(__dirname, './notifications_config')),
    notifications_customers: seq.import(path.join(__dirname, './notifications_customers')),
    notifications: seq.import(path.join(__dirname, './notifications')),
    oauth_access_tokens: seq.import(path.join(__dirname, './oauth_access_tokens')),
    oauth_auth_codes: seq.import(path.join(__dirname, './oauth_auth_codes')),
    notifications_sms: seq.import(path.join(__dirname, './notifications_sms')),
    notifications_templates: seq.import(path.join(__dirname, './notifications_templates')),
    oauth_personal_access_clients: seq.import(path.join(__dirname, './oauth_personal_access_clients')),
    oauth_refresh_tokens: seq.import(path.join(__dirname, './oauth_refresh_tokens')),
    password_resets: seq.import(path.join(__dirname, './password_resets')),
    oauth_clients: seq.import(path.join(__dirname, './oauth_clients')),
    payment_concepts: seq.import(path.join(__dirname, './payment_concepts')),
    payment_formats: seq.import(path.join(__dirname, './payment_formats')),
    payment_methods: seq.import(path.join(__dirname, './payment_methods')),
    pay_days: seq.import(path.join(__dirname, './pay_days')),
    payment_promise: seq.import(path.join(__dirname, './payment_promise')),
    payment_promise_receivables: seq.import(path.join(__dirname, './payment_promise_receivables')),
    payment_request_receivable: seq.import(path.join(__dirname, './payment_request_receivable')),
    payment_periods: seq.import(path.join(__dirname, './payment_periods')),
    payments_receivable: seq.import(path.join(__dirname, './payments_receivable')),
    payments_request: seq.import(path.join(__dirname, './payments_request')),
    periods: seq.import(path.join(__dirname, './periods')),
    payments: seq.import(path.join(__dirname, './payments')),
    permissions: seq.import(path.join(__dirname, './permissions')),
    plans: seq.import(path.join(__dirname, './plans')),
    promises_payment: seq.import(path.join(__dirname, './promises_payment')),
    receivables: seq.import(path.join(__dirname, './receivables')),
    permission_role: seq.import(path.join(__dirname, './permission_role')),
    receivables_notifications: seq.import(path.join(__dirname, './receivables_notifications')),
    recovery_goals: seq.import(path.join(__dirname, './recovery_goals')),
    role_user: seq.import(path.join(__dirname, './role_user')),
    roles: seq.import(path.join(__dirname, './roles')),
    sync_log: seq.import(path.join(__dirname, './sync_log')),
    transactions: seq.import(path.join(__dirname, './transactions')),
    transactions_files: seq.import(path.join(__dirname, './transactions_files')),
    sites: seq.import(path.join(__dirname, './sites')),
    user_sync_log: seq.import(path.join(__dirname, './user_sync_log')),
    user_sync_log_payments: seq.import(path.join(__dirname, './user_sync_log_payments')),
    user_notifications: seq.import(path.join(__dirname, './user_notifications')),
    users: seq.import(path.join(__dirname, './users')),
    webservices_log: seq.import(path.join(__dirname, './webservices_log')),
  };
  return tables;
};
