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
  company_user:def.company_userModel;
  company_intercom_data:def.company_intercom_dataModel;
  contact_phone:def.contact_phoneModel;
  contacts:def.contactsModel;
  contpaqi_license_config_log:def.contpaqi_license_config_logModel;
  contact_email:def.contact_emailModel;
  credit_days:def.credit_daysModel;
  credit_notes:def.credit_notesModel;
  credit_payments:def.credit_paymentsModel;
  credit_report_accounts:def.credit_report_accountsModel;
  contracts:def.contractsModel;
  credit_report_addresses:def.credit_report_addressesModel;
  credit_report_companies:def.credit_report_companiesModel;
  credit_report_credits:def.credit_report_creditsModel;
  credit_report_customers:def.credit_report_customersModel;
  credit_report_endorses:def.credit_report_endorsesModel;
  credit_report_morals:def.credit_report_moralsModel;
  credit_report_shareholders:def.credit_report_shareholdersModel;
  credit_report_employments:def.credit_report_employmentsModel;
  cuenta_clabe_control:def.cuenta_clabe_controlModel;
  currencies:def.currenciesModel;
  customer_invites:def.customer_invitesModel;
  credit_reports:def.credit_reportsModel;
  customers_pending_balance:def.customers_pending_balanceModel;
  customers_unassigned:def.customers_unassignedModel;
  customers_without_logbook:def.customers_without_logbookModel;
  customers:def.customersModel;
  dispersion_orders:def.dispersion_ordersModel;
  distributor_levels:def.distributor_levelsModel;
  distributors:def.distributorsModel;
  discounts:def.discountsModel;
  erps:def.erpsModel;
  extensions:def.extensionsModel;
  economic_sectors:def.economic_sectorsModel;
  history_assignments:def.history_assignmentsModel;
  failed_jobs:def.failed_jobsModel;
  historial_deuda_comentarios:def.historial_deuda_comentariosModel;
  incidence_reasons:def.incidence_reasonsModel;
  history_invoices:def.history_invoicesModel;
  import_data_service_logs:def.import_data_service_logsModel;
  jobs:def.jobsModel;
  incidences:def.incidencesModel;
  invoice_json:def.invoice_jsonModel;
  license_payments:def.license_paymentsModel;
  licence_renewals:def.licence_renewalsModel;
  licences:def.licencesModel;
  logbook:def.logbookModel;
  logbook_payment:def.logbook_paymentModel;
  licenses_contpaqi:def.licenses_contpaqiModel;
  licenses_feraz:def.licenses_ferazModel;
  notification_rules:def.notification_rulesModel;
  notification_templates:def.notification_templatesModel;
  notifications:def.notificationsModel;
  migrations:def.migrationsModel;
  notifications_customers:def.notifications_customersModel;
  notifications_sms:def.notifications_smsModel;
  notifications_templates:def.notifications_templatesModel;
  notifications_config:def.notifications_configModel;
  oauth_auth_codes:def.oauth_auth_codesModel;
  oauth_clients:def.oauth_clientsModel;
  oauth_access_tokens:def.oauth_access_tokensModel;
  password_resets:def.password_resetsModel;
  oauth_personal_access_clients:def.oauth_personal_access_clientsModel;
  oauth_refresh_tokens:def.oauth_refresh_tokensModel;
  payment_formats:def.payment_formatsModel;
  pay_days:def.pay_daysModel;
  payment_concepts:def.payment_conceptsModel;
  payment_promise:def.payment_promiseModel;
  payment_methods:def.payment_methodsModel;
  payment_periods:def.payment_periodsModel;
  payment_promise_receivables:def.payment_promise_receivablesModel;
  payment_request_receivable:def.payment_request_receivableModel;
  payments_receivable:def.payments_receivableModel;
  payments:def.paymentsModel;
  payments_request:def.payments_requestModel;
  permissions:def.permissionsModel;
  periods:def.periodsModel;
  permission_role:def.permission_roleModel;
  receivables:def.receivablesModel;
  receivables_notifications:def.receivables_notificationsModel;
  recovery_goals:def.recovery_goalsModel;
  plans:def.plansModel;
  promises_payment:def.promises_paymentModel;
  role_user:def.role_userModel;
  roles:def.rolesModel;
  sites:def.sitesModel;
  transactions_files:def.transactions_filesModel;
  user_notifications:def.user_notificationsModel;
  sync_log:def.sync_logModel;
  transactions:def.transactionsModel;
  user_sync_log_payments:def.user_sync_log_paymentsModel;
  user_sync_log:def.user_sync_logModel;
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
    company_user: seq.import(path.join(__dirname, './company_user')),
    company_intercom_data: seq.import(path.join(__dirname, './company_intercom_data')),
    contact_phone: seq.import(path.join(__dirname, './contact_phone')),
    contacts: seq.import(path.join(__dirname, './contacts')),
    contpaqi_license_config_log: seq.import(path.join(__dirname, './contpaqi_license_config_log')),
    contact_email: seq.import(path.join(__dirname, './contact_email')),
    credit_days: seq.import(path.join(__dirname, './credit_days')),
    credit_notes: seq.import(path.join(__dirname, './credit_notes')),
    credit_payments: seq.import(path.join(__dirname, './credit_payments')),
    credit_report_accounts: seq.import(path.join(__dirname, './credit_report_accounts')),
    contracts: seq.import(path.join(__dirname, './contracts')),
    credit_report_addresses: seq.import(path.join(__dirname, './credit_report_addresses')),
    credit_report_companies: seq.import(path.join(__dirname, './credit_report_companies')),
    credit_report_credits: seq.import(path.join(__dirname, './credit_report_credits')),
    credit_report_customers: seq.import(path.join(__dirname, './credit_report_customers')),
    credit_report_endorses: seq.import(path.join(__dirname, './credit_report_endorses')),
    credit_report_morals: seq.import(path.join(__dirname, './credit_report_morals')),
    credit_report_shareholders: seq.import(path.join(__dirname, './credit_report_shareholders')),
    credit_report_employments: seq.import(path.join(__dirname, './credit_report_employments')),
    cuenta_clabe_control: seq.import(path.join(__dirname, './cuenta_clabe_control')),
    currencies: seq.import(path.join(__dirname, './currencies')),
    customer_invites: seq.import(path.join(__dirname, './customer_invites')),
    credit_reports: seq.import(path.join(__dirname, './credit_reports')),
    customers_pending_balance: seq.import(path.join(__dirname, './customers_pending_balance')),
    customers_unassigned: seq.import(path.join(__dirname, './customers_unassigned')),
    customers_without_logbook: seq.import(path.join(__dirname, './customers_without_logbook')),
    customers: seq.import(path.join(__dirname, './customers')),
    dispersion_orders: seq.import(path.join(__dirname, './dispersion_orders')),
    distributor_levels: seq.import(path.join(__dirname, './distributor_levels')),
    distributors: seq.import(path.join(__dirname, './distributors')),
    discounts: seq.import(path.join(__dirname, './discounts')),
    erps: seq.import(path.join(__dirname, './erps')),
    extensions: seq.import(path.join(__dirname, './extensions')),
    economic_sectors: seq.import(path.join(__dirname, './economic_sectors')),
    history_assignments: seq.import(path.join(__dirname, './history_assignments')),
    failed_jobs: seq.import(path.join(__dirname, './failed_jobs')),
    historial_deuda_comentarios: seq.import(path.join(__dirname, './historial_deuda_comentarios')),
    incidence_reasons: seq.import(path.join(__dirname, './incidence_reasons')),
    history_invoices: seq.import(path.join(__dirname, './history_invoices')),
    import_data_service_logs: seq.import(path.join(__dirname, './import_data_service_logs')),
    jobs: seq.import(path.join(__dirname, './jobs')),
    incidences: seq.import(path.join(__dirname, './incidences')),
    invoice_json: seq.import(path.join(__dirname, './invoice_json')),
    license_payments: seq.import(path.join(__dirname, './license_payments')),
    licence_renewals: seq.import(path.join(__dirname, './licence_renewals')),
    licences: seq.import(path.join(__dirname, './licences')),
    logbook: seq.import(path.join(__dirname, './logbook')),
    logbook_payment: seq.import(path.join(__dirname, './logbook_payment')),
    licenses_contpaqi: seq.import(path.join(__dirname, './licenses_contpaqi')),
    licenses_feraz: seq.import(path.join(__dirname, './licenses_feraz')),
    notification_rules: seq.import(path.join(__dirname, './notification_rules')),
    notification_templates: seq.import(path.join(__dirname, './notification_templates')),
    notifications: seq.import(path.join(__dirname, './notifications')),
    migrations: seq.import(path.join(__dirname, './migrations')),
    notifications_customers: seq.import(path.join(__dirname, './notifications_customers')),
    notifications_sms: seq.import(path.join(__dirname, './notifications_sms')),
    notifications_templates: seq.import(path.join(__dirname, './notifications_templates')),
    notifications_config: seq.import(path.join(__dirname, './notifications_config')),
    oauth_auth_codes: seq.import(path.join(__dirname, './oauth_auth_codes')),
    oauth_clients: seq.import(path.join(__dirname, './oauth_clients')),
    oauth_access_tokens: seq.import(path.join(__dirname, './oauth_access_tokens')),
    password_resets: seq.import(path.join(__dirname, './password_resets')),
    oauth_personal_access_clients: seq.import(path.join(__dirname, './oauth_personal_access_clients')),
    oauth_refresh_tokens: seq.import(path.join(__dirname, './oauth_refresh_tokens')),
    payment_formats: seq.import(path.join(__dirname, './payment_formats')),
    pay_days: seq.import(path.join(__dirname, './pay_days')),
    payment_concepts: seq.import(path.join(__dirname, './payment_concepts')),
    payment_promise: seq.import(path.join(__dirname, './payment_promise')),
    payment_methods: seq.import(path.join(__dirname, './payment_methods')),
    payment_periods: seq.import(path.join(__dirname, './payment_periods')),
    payment_promise_receivables: seq.import(path.join(__dirname, './payment_promise_receivables')),
    payment_request_receivable: seq.import(path.join(__dirname, './payment_request_receivable')),
    payments_receivable: seq.import(path.join(__dirname, './payments_receivable')),
    payments: seq.import(path.join(__dirname, './payments')),
    payments_request: seq.import(path.join(__dirname, './payments_request')),
    permissions: seq.import(path.join(__dirname, './permissions')),
    periods: seq.import(path.join(__dirname, './periods')),
    permission_role: seq.import(path.join(__dirname, './permission_role')),
    receivables: seq.import(path.join(__dirname, './receivables')),
    receivables_notifications: seq.import(path.join(__dirname, './receivables_notifications')),
    recovery_goals: seq.import(path.join(__dirname, './recovery_goals')),
    plans: seq.import(path.join(__dirname, './plans')),
    promises_payment: seq.import(path.join(__dirname, './promises_payment')),
    role_user: seq.import(path.join(__dirname, './role_user')),
    roles: seq.import(path.join(__dirname, './roles')),
    sites: seq.import(path.join(__dirname, './sites')),
    transactions_files: seq.import(path.join(__dirname, './transactions_files')),
    user_notifications: seq.import(path.join(__dirname, './user_notifications')),
    sync_log: seq.import(path.join(__dirname, './sync_log')),
    transactions: seq.import(path.join(__dirname, './transactions')),
    user_sync_log_payments: seq.import(path.join(__dirname, './user_sync_log_payments')),
    user_sync_log: seq.import(path.join(__dirname, './user_sync_log')),
    users: seq.import(path.join(__dirname, './users')),
    webservices_log: seq.import(path.join(__dirname, './webservices_log')),
  };
  return tables;
};
